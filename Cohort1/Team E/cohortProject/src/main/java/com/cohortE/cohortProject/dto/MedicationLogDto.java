package com.cohortE.cohortProject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicationLogDto {

    private String medicationName;
    private String medicationType;
    private String dosageAmount;
    private String dosageFrequency;
    private LocalTime dosageTime;
    private boolean taken;
    private Long medicationLogId;
    private Long reminderId;
    private Long medicationId;
}
