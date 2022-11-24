# CDMS: Crime Data Management System

![GitHub contributors](https://img.shields.io/github/contributors/sophie210286/DBMS_Project?color=palevioletred) ![GitHub last commit](https://img.shields.io/github/last-commit/sophie210286/DBMS_Project?color=mediumorchid) ![GitHub deployments](https://img.shields.io/github/deployments/sophie210286/DBMS_Project/main?label=deploy&color=mediumseagreen)

## Overview

Abstract—Atlanta police departments encounter numerous incidents daily. In efforts to record the details of such incidents and the relationships amongst the various parties involved, a coherent relational database management system (RDBMS) is crucial to manage the influx of data. The police department database encompasses information about the various entity sets; the police officer handling each crime and criminal, the detailed information about the criminal, the accurate time and precise location in which the incident occurred, and the specifics of the victim influenced by the crime. The relational database includes a table representing each entity set with their various entities along with the tables illustrating the relationship between them. In this database, the primary and secondary keys are specified to ensure uniqueness of information and to ease creating reports. The database also simplifies storing and updating data for ease of data management. Additionally, RDBMS is essential for creating reports to analyze crime statistics in Atlanta and predict trends to focus safety efforts on areas with high crime numbers. 

### I. Introduction

With a crime rate of 45 per one thousand residents, Atlanta scores one of the highest crime rates in America [1]. One’s chance of becoming a victim of either violent or property crime in 2022 within Georgia is more than 91% of the communities have a lower crime rate than Atlanta [1]. According to statistics, violent crime rate is one of the highest in the nation, across communities of all sizes this including rape, murder, armed robbery, and aggravated assault. According to Neighborhood Scout’s analysis of FBI reported crime data, the chances of one to become a victim of one of these crimes in Atlanta is one in 134 [2]. Additionally, Atlanta has one of the highest rates of motor vehicle theft according to the analysis of FBI crime data. The chance of getting your car stolen if you live in Atlanta is 1 in 154 [2].




### II. Neighbourhood crime
 

### III. Victimized groups


### IV. Common types of crimes

Gang crime is one of the main causes of violent crime in Atlanta. Since the 1970s, gang activity has increased dramatically. Gang members are responsible for more than half of Atlanta's violent crimes. It is known that there are more than 192 gangs [4]. Along with drug peddling, carjacking, identity theft, and credit card fraud, they also conduct violent crimes. The 14 cities with the highest rates of child sex trafficking include Atlanta. Children who are being trafficked for sex arrive in large numbers to Atlanta via Mexican border crossings. The sex trafficking network made $290 million in 2007 [4].

Furthermore, in 2022, there were 86 murders, 1,921 serious assaults, 88 rapes, and 379 robberies [4]. Per 100,000, Atlanta has a murder rate of 17 people, a rate of violent assault of 386, a rate of rape of 18, and a rate of robbery of 76 [4]. There have been 1,582 motor vehicle thefts, 7,167 thefts, and 918 burglaries or break-ins in Atlanta [4]. Shoplifting, theft from a moving vehicle, and all other larceny are the major three categories of theft in Atlanta. The burglary rate is 184 per 100,000, while the motor vehicle theft rate is 318, and an overall theft rate of 1,440 [4]. Criminal justice experts may find it useful to use the Crime monitoring data management as a tool to foresee rising crime risk. Law enforcement action can then be taken to stop the anticipated crimes from happening. Additionally, it can aid in concentrating on a particular locations and enable better use of police resources.


### V. Need for DB system

When managing a myriad of data related to crime, numerous problems emerge. For instance, various crimes could unfold in real-time or be discovered at multiple zones. Also, there could be certain hotspots where specific crimes are reoccurring, or people of a particular race are getting targeted, which requires urgent investigation. In addition, victims and criminals must be tracked for further investigation and maintaining records. Therefore, the need for a crime data management system arises to address these problems, which can manage data efficiently and concurrently while keeping data integrity. The crime data management system can be used to manage crime, generate reports, and analyze crime trends in the region so that justice is served appropriately.

### ER diagram

Creating an ER Diagram is the first step in building the RDBMS. The police department is managed by numerous police officers who each has a unique ID number, name, and title. Those officers have to manage multiple crimes. Each crime has a case ID number, type of crime, and weapon used in committed crimes. Each crime is committed by an offender. Each criminal has a unique criminal ID number, criminal’s race, name, address, age, and number of offenses. The victim affected by the criminal has a victim ID number, name, address, race, age, and gender. Each crime happens in a certain period of time (day or night). Also, the crime might occur during special occasion such as New Year’s or Christmas. 
Based on the crime data, we set police, crime, criminal, victim, and time as entities to classify the important interest. Attributes identify specific information on each entity such as ID numbers, name, address, age, race, etc. Each entity has a unique primary key: policeID in the police table, victimID in the Victim table, criminalID in the Criminal table, caseID in Crime table, and occasion in the Time table. The relationships exist between entities to capture how each entity relates to one another. For example police manage the crimes, crimes committed by criminals or the victims get affected by the criminals. Therefore, the secondary keys in the relation tables are occasion and caseID from Time and Crime tables respectively, caseID and criminalID from Crime and Criminal tables respectively, criminalID and victimID in the Affect table coming from Criminal and Victim tables respectively, and finally, the victimID and PoliceID in the help relation from the initial Victim and Police respectively. 

![ER diagram](/documents/assets/ER.png)



### References

[1] “Atlanta, GA crime rates”  NeighborhoodScout. n.d. https://www.neighborhoodscout.com/ga/atlanta/crime#description Accessed 15 October 2022 

[2] “Atlanta Crime Rate Report (Georgia)”. n.d.          https://www.cityrating.com/crime-statistics/georgia/atlanta.html Accessed 15 October 2022 

[3] Atlanta GVA Final Design - NICJR. https://nicjr.org/wp-content/uploads/2022/06/Atlanta-GVA_061022.pdf. 

[4] Ford, H. (2022, July 27). Is Atlanta's crime worse than Chicago's? 11Alive. Retrieved October 15, 2022, from https://www.11alive.com/article/news/crime/atlanta-chicago-crime-rates/85-1a13cc4a-bdef-43d6-a213-69ced3835b48

