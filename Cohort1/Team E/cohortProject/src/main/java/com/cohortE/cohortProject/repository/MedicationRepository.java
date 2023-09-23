package com.cohortE.cohortProject.repository;

import com.cohortE.cohortProject.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicationRepository extends JpaRepository<Medication, Long> {

    List<Medication> findByUserId(Long id);


}
