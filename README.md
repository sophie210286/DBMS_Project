# CDMS: Crime Data Management System

![GitHub contributors](https://img.shields.io/github/contributors/sophie210286/DBMS_Project?color=palevioletred) ![GitHub last commit](https://img.shields.io/github/last-commit/sophie210286/DBMS_Project?color=mediumorchid)

For project installation, checkout this [README](/website/README.md) 


## Overview

Abstract—Atlanta police departments encounter numerous incidents daily. In efforts to record the details of such incidents and the relationships amongst the various parties involved, a coherent relational database management system (RDBMS) is crucial to manage the influx of data. The police department database encompasses information about the various entity sets; the police officer handling each crime and criminal, the detailed information about the criminal, the accurate time and precise location in which the incident occurred, and the specifics of the victim influenced by the crime. The relational database includes a table representing each entity set with their various entities along with the tables illustrating the relationship between them. In this database, the primary and secondary keys are specified to ensure uniqueness of information and to ease creating reports. The database also simplifies storing and updating data for ease of data management. Additionally, RDBMS is essential for creating reports to analyze crime statistics in Atlanta and predict trends to focus safety efforts on areas with high crime numbers. 

### I. Introduction

With a crime rate of 45 per one thousand residents, Atlanta scores one of the highest crime rates in America [1]. One’s chance of becoming a victim of either violent or property crime in 2022 within Georgia is more than 91% of the communities have a lower crime rate than Atlanta [1]. According to statistics, violent crime rate is one of the highest in the nation, across communities of all sizes this including rape, murder, armed robbery, and aggravated assault. According to Neighborhood Scout’s analysis of FBI reported crime data, the chances of one to become a victim of one of these crimes in Atlanta is one in 134 [2]. Additionally, Atlanta has one of the highest rates of motor vehicle theft according to the analysis of FBI crime data. The chance of getting your car stolen if you live in Atlanta is 1 in 154 [2].




### II. Neighbourhood crime
Home to about 500,000 residents the crime rate in Atlanta Georgia has slowly been on the rise. With six zones, consisting of a total of 242 distinct neighborhoods, keeping the crime rate low in Atlanta is a substantial responsibility placed on law enforcement. In addition, with income disparity and racial segregation playing an extensive role in the amount of police presence or intervention, certain neighborhoods are seeing increasing amounts of criminal activity, while others have been deemed some of the safest neighborhoods to live in Atlanta. Along with this Atlanta has continued to see an increase of people of all socio-economic statuses migrating to the city. However, with this rise of people moving to the city has come an increase in crimes concentrated in particular neighborhoods, or areas around the city known as hot spots, due to various reasons not limited to: the homelessness crisis, inflation, and more. 
Neighborhoods located in areas within the top percent of income such as Buckhead, Garden Hills, and Colonial Homes see much less criminal activity in comparison to the rest of the city.  On the opposite end, areas such as Oakland City and West End,  which are known for having affordable rent for Atlanta, have seen a staggering higher amount of criminal activity compared to the previously mentioned areas. In addition neighborhoods along Atlanta’s subway line - MARTA has also seen a slow increase in crime for reasons such as easier access to those areas, with some becoming hotspots for all sorts of criminal activity. Using some form of crime tracking data management system would allow police/government officials to see what areas need more or less police intervention, which in turn could aid them in responding to crimes faster, reducing the amount of criminal activity within the city. 


### III. Victimized groups

When it comes to racial groups most affected by violence in Atlanta Georgia, one should condider the period between January 1, 2021 to December 31, 2021. During this time period the city of Atlanta experience 158 homicides (only one more than the pervious year 157)  and 392 nonfatal shootings. These numbers were reported during the thick of the pandemic which played a role in the increase of violence. In 2021, the homicide rate was 31.7 per 100,000 and reflected the highest number of homicides in city history dating back to 1997. If one were to compare the 2010 homicide rate to the 2020 homicide rate, they would see an astounding 58.3 percent increase.

The most common victims and suspects of these statisics were largely disproportionately Black and male. And despite common opinion, those primarily involved in homicides in Atlanta were not teenagers, but young adults in their mid-to-late twenties.When analyzing the demographics, our we found that out of 158 homicides, the average age of the victim was 31.9 and the average age of the suspect was 27.1. The gender for the victims were 133 (84%) for Male and 25 (16%) for Female. When viewing the racial makeup of the victims, we saw that out of 85 homicides, 80 were Black (94.1%), 4 were Asian(4.7%) and 1 was Hispanic (1.2%). Overall, based on the data we found, most victims of violent crimes have been Black.

### IV. Common types of crimes

Gang crime is one of the main causes of violent crime in Atlanta. Since the 1970s, gang activity has increased dramatically. Gang members are responsible for more than half of Atlanta's violent crimes. It is known that there are more than 192 gangs [4]. Along with drug peddling, carjacking, identity theft, and credit card fraud, they also conduct violent crimes. The 14 cities with the highest rates of child sex trafficking include Atlanta. Children who are being trafficked for sex arrive in large numbers to Atlanta via Mexican border crossings. The sex trafficking network made $290 million in 2007 [4].

Furthermore, in 2022, there were 86 murders, 1,921 serious assaults, 88 rapes, and 379 robberies [4]. Per 100,000, Atlanta has a murder rate of 17 people, a rate of violent assault of 386, a rate of rape of 18, and a rate of robbery of 76 [4]. There have been 1,582 motor vehicle thefts, 7,167 thefts, and 918 burglaries or break-ins in Atlanta [4]. Shoplifting, theft from a moving vehicle, and all other larceny are the major three categories of theft in Atlanta. The burglary rate is 184 per 100,000, while the motor vehicle theft rate is 318, and an overall theft rate of 1,440 [4]. Criminal justice experts may find it useful to use the Crime monitoring data management as a tool to foresee rising crime risk. Law enforcement action can then be taken to stop the anticipated crimes from happening. Additionally, it can aid in concentrating on a particular locations and enable better use of police resources.


### V. Need for DB system

When managing a myriad of data related to crime, numerous problems emerge. For instance, various crimes could unfold in real-time or be discovered at multiple zones. Also, there could be certain hotspots where specific crimes are reoccurring, or people of a particular race are getting targeted, which requires urgent investigation. In addition, victims and criminals must be tracked for further investigation and maintaining records. Therefore, the need for a crime data management system arises to address these problems, which can manage data efficiently and concurrently while keeping data integrity. The crime data management system can be used to manage crime, generate reports, and analyze crime trends in the region so that justice is served appropriately.

### ER diagram

Creating an ER Diagram is the first step in building the RDBMS. The police department is managed by numerous police officers who each has a unique ID number, name, and title. Those officers have to manage multiple crimes. Each crime has a case ID number, type of crime, and weapon used in committed crimes. Each crime is committed by an offender. Each criminal has a unique criminal ID number, criminal’s race, name, address, age, and number of offenses. The victim affected by the criminal has a victim ID number, name, address, race, age, and gender. Each crime happens in a certain period of time (day or night). Also, the crime might occur during special occasion such as New Year’s or Christmas. 
Based on the crime data, we set police, crime, criminal, victim, and time as entities to classify the important interest. Attributes identify specific information on each entity such as ID numbers, name, address, age, race, etc. Each entity has a unique primary key: policeID in the police table, victimID in the Victim table, criminalID in the Criminal table, caseID in Crime table, and occasion in the Time table. The relationships exist between entities to capture how each entity relates to one another. For example police manage the crimes, crimes committed by criminals or the victims get affected by the criminals. Therefore, the secondary keys in the relation tables are occasion and caseID from Time and Crime tables respectively, caseID and criminalID from Crime and Criminal tables respectively, criminalID and victimID in the Affect table coming from Criminal and Victim tables respectively, and finally, the victimID and PoliceID in the help relation from the initial Victim and Police respectively. 

![ER diagram](/documents/assets/ERD.PNG)



### References

[1] “Atlanta, GA crime rates”  NeighborhoodScout. n.d. https://www.neighborhoodscout.com/ga/atlanta/crime#description Accessed 15 October 2022 

[2] “Atlanta Crime Rate Report (Georgia)”. n.d.          https://www.cityrating.com/crime-statistics/georgia/atlanta.html Accessed 15 October 2022 

[3] Atlanta GVA Final Design - NICJR. https://nicjr.org/wp-content/uploads/2022/06/Atlanta-GVA_061022.pdf. 

[4] Ford, H. (2022, July 27). Is Atlanta's crime worse than Chicago's? 11Alive. Retrieved October 15, 2022, from https://www.11alive.com/article/news/crime/atlanta-chicago-crime-rates/85-1a13cc4a-bdef-43d6-a213-69ced3835b48

