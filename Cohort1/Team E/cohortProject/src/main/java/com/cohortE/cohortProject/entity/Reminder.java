package com.cohortE.cohortProject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalTime;

@Entity
@Table(name = "reminders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reminder_id")
    private Long id;
    @Column(name = "dosage_day")
    private String dosageDay;
    @Column(name = "dosage_time")
    private LocalTime dosageTime;
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "medication_id")
    private Medication medication;

}
