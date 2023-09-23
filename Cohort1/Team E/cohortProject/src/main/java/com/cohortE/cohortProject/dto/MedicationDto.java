package com.cohortE.cohortProject.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicationDto {
    @NotBlank(message = "Medication name cannot be blank")
    private String medicationName;
    @NotBlank(message = "Medication type cannot be blank")
    private String medicationType;
    @NotBlank(message = "Dosage amount cannot be blank")
    private String dosageAmount;
    @NotBlank(message = "Dosage Frequency cannot be blank")
    private String dosageFrequency;
    @NotBlank(message = "Dosage time cannot be blank")
    private LocalTime dosageTime;
}
