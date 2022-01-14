package com.lorenzozaar.reactWeek.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lorenzozaar.reactWeek.DTO.MovieDTO;
import com.lorenzozaar.reactWeek.DTO.ScoreDTO;
import com.lorenzozaar.reactWeek.Entities.Movie;
import com.lorenzozaar.reactWeek.Entities.Score;
import com.lorenzozaar.reactWeek.Entities.User;
import com.lorenzozaar.reactWeek.Repositories.MovieRepository;
import com.lorenzozaar.reactWeek.Repositories.ScoreRepository;
import com.lorenzozaar.reactWeek.Repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ScoreRepository scoreRepo;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepo.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepo.saveAndFlush(user);
		}
		
		Movie movie = movieRepo.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepo.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepo.save(movie);
		
		return new MovieDTO(movie);
	}
	
}
