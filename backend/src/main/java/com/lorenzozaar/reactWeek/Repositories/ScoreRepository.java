package com.lorenzozaar.reactWeek.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lorenzozaar.reactWeek.Entities.Score;
import com.lorenzozaar.reactWeek.Entities.ScorePK;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
