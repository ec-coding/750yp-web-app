package com.cohortE.cohortProject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "medications")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medication_id")
    private Long id;
    @Column(name = "medication_name")
    private String medicationName;
    @Column(name = "medication_type")
    private String medicationType;
    @Column(name = "dosage_amount")
    private String dosageAmount;
    @Column(name = "dosage_frequency")
    private String dosageFrequency;
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
