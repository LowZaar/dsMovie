package com.lorenzozaar.reactWeek.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lorenzozaar.reactWeek.DTO.MovieDTO;
import com.lorenzozaar.reactWeek.Entities.Movie;
import com.lorenzozaar.reactWeek.Repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repo;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repo.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));

		return page;
	}

	@Transactional(readOnly = true)
	public MovieDTO findbyId(Long id) {
		Movie result = repo.findById(id).get();
		MovieDTO movie = new MovieDTO(result);
		return movie;
	}
}
