"use client";

import { randArrEl, randInt } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { CITIZENS_AGE_RANGE } from "./constants";

type CitizensData = {
  id: string;
  name: string;
  age: number;
}[];

export const peopleNames = {
  Asia: [
    "John D. Lee",
    "Ming F. Zhao",
    "Akira Y. Takahashi",
    "Hassan J. Khan",
    "Ramesh K. Patel",
    "Siti S. Rajah",
    "Bao T. Feng",
    "Ali R. Hadi",
    "Chandran M. Kumar",
    "Kiran K. Shah",
    "Sadaf P. Iqbal",
    "Tariq H. Abdullah",
    "Zia R. Ahmed",
    "Areeb M. Syed",
    "Fareeda S. Begum",
    "Jabir H. Jamil",
    "Dinesh R. Kumar",
    "Iqbal F. Choudhury",
    "Naseem K. Ali",
    "Arun T. Sharma",
    "Suman R. Das",
    "Fahim M. Chowdhury",
    "Tariq A. Ahmed",
    "Sana T. Irshad",
    "Farhan H. Khan",
    "Mahmood A. Alam",
    "Sarah M. Janjua",
    "Nawaz R. Khan",
    "Nida T. Ashraf",
    "Farhana M. Jamil",
    "Salma S. Begum",
    "Asad U. Faridi",
    "Kashan M. Munir",
    "Ahsan H. Nasir",
    "Salahuddin R. Hossain",
    "Shahzad F. Raza",
    "Zahra T. Bukhari",
    "Ali H. Waqas",
    "Khalid F. Farooq",
    "Yasmeen A. Latif",
    "Nazia R. Butt",
    "Mirza S. Aslam",
    "Fariha A. Khan",
    "Kiran S. Shah",
    "Muhammad F. Nadeem",
    "Bashir A. Javed",
    "Adeel T. Naeem",
    "Khurram H. Siddiqui",
    "Raza T. Mahmood",
    "Muneeb F. Shahid",
    "Shahbaz S. Baig",
    "Aamir R. Manzoor",
    "Salman F. Iqbal",
    "Faizan A. Khan",
    "Mahmud M. Hashmi",
    "Tariq K. Malik",
    "Mehreen S. Hashmi",
    "Farhat M. Mehmood",
    "Raheel S. Raza",
    "Syed R. Jaffar",
    "Madiha S. Zahid",
    "Sajid F. Akhtar",
    "Hamza M. Aziz",
    "Zeeshan T. Jamil",
    "Sabeen A. Nadeem",
    "Noman F. Iqbal",
    "Khurram M. Khan",
    "Raza S. Malik",
    "Alina M. Bhatti",
    "Sohail R. Hassan",
    "Kamran F. Raza",
    "Saba A. Chaudhry",
    "Khushbakht T. Aziz",
    "Adeel F. Malik",
    "Sarah T. Agha",
    "Sadia A. Farooq",
    "Ammar M. Bukhari",
    "Azhar A. Khokhar",
    "Raheel T. Kiani",
    "Saad M. Nawaz",
    "Ahsan M. Khan",
    "Sana S. Karim",
    "Muhammad A. Ali",
    "Irfan S. Sethi",
    "Fariha R. Syed",
    "Muzammil M. Zafar",
    "Shamaila T. Saleem",
    "Sarah T. Faheem",
    "Rehan S. Aftab",
    "Asad M. Karim",
    "Jameel F. Haroon",
    "Danish A. Siddiqui",
    "Zahid M. Jameel",
    "Muneeb S. Ahmad",
    "Adeel M. Tufail",
    "Imran S. Tanveer",
    "Zeeshan F. Imran",
    "Ahsan A. Malik",
    "Tariq F. Rahman",
    "Zoya A. Imran",
    "Salman A. Niaz",
    "Kiran S. Durrani",
    "Faisal M. Akram",
    "Sana F. Aziz",
    "Ayaan Mohammad Rizvi",
    "Anjali Kumari Patil",
    "Rajesh Sunil Verma",
    "Hina Sultana Khan",
    "Arif Mohammad Ansari",
    "Sanya Fatima Iqbal",
    "Ayesha Tanveer Noor",
    "Ravi Prakash Gupta",
    "Nishan Farooq Sharma",
    "Naina Kavita Kapoor",
    "Sujan Mohan Das",
    "Sushil Kumar Yadav",
    "Zainab Shazia Rehman",
    "Kartik Tushar Rao",
    "Sana Mehmood Sheikh",
    "Tariq Raza Shahid",
    "Hassan Mohammad Anwar",
    "Amira Shahbaz Abbas",
    "Sajid Fareed Ali",
    "Imran Mohammad Aziz",
    "Neha Tanisha Shah",
    "Samir Kiran Lal",
    "Nadira Fariha Karim",
    "Shivendra Rajesh Mishra",
    "Saira Mahmood Baig",
    "Samar Fareed Raza",
    "Rehan Tariq Ansari",
    "Veena Anjali Kumar",
    "Vikram Mohan Patel",
    "Aftab Fareed Shah",
    "Farhan Shah Ali",
    "Nikita Kanwal Mehta",
    "Sandeep Tushar Rathi",
    "Iqra Rahim Khan",
    "Mohan Suman Choudhury",
    "Aftab Sameer Parvez",
    "Asha Mohini Das",
    "Suman Kavita Mishra",
    "Kavita Rani Gupta",
    "Vikram Faizan Chawla",
    "Mansoor Hassan Rashid",
    "Saba Tanveer Rahman",
    "Rita Anjali Sharma",
    "Rahil Mohammad Zaman",
    "Nida Khurram Ali",
    "Amira Faiza Choudhury",
    "Javed Mohammad Sadiq",
    "Neelam Tanveer Bhatti",
    "Hassan Tariq Khan",
    "Saniya Rahim Rizvi",
    "Omar Khalid Farooq",
    "Zubair Ahmed Akhtar",
    "Sonali Meenal Mehta",
    "Ayesha Tabbasum Khan",
    "Gulzar Hassan Khan",
    "Ritika Manish Verma",
    "Vishal Tanveer Kaur",
    "Sushila Anju Thakur",
    "Zaheer Shah Bukhari",
    "Sameer Rashid Khan",
    "Simran Kiran Jadhav",
    "Kashif Mohammad Butt",
    "Rashid Tariq Qureshi",
    "Mahi Kanwal Shah",
    "Sarfaraz Arif Abbasi",
    "Nadira Aysha Khan",
    "Niraj Tejas Joshi",
    "Shamim Sadiq Begum",
    "Farid Abdullah Chowdhury",
    "Umar Fahad Raza",
    "Rani Sahiba Shahid",
    "Jamil Rehan Ali",
    "Shazia Tanveer Iqbal",
    "Sameer Sohail Malik",
    "Rajni Tanuja Malhotra",
    "Nadim Ali Khan",
    "Nashit Faiz",
    "Sohail Mohammad Raza",
    "Anil Kumar Kapoor",
    "Rohan Mahesh Sharma",
    "Sabeen Tanveer Ali",
    "Samar Ali Shahid",
    "Shahbaz Mohammad Iqbal",
    "Nina Kumari Chatterjee",
    "Manoj Rajesh Tripathi",
    "Sana Rubina Riaz",
    "Abbas Tariq Zaidi",
    "Reza Mohammad Shah",
    "Tariq Faisal Rahman",
    "Maha Khalid Farooq",
    "Kiran Mohsin Malik",
    "Rehan Mohammad Khan",
    "Imtiaz Faizan Qureshi",
    "Meera Kumari Jangir",
    "Salim Shabbir Ansari",
    "Rupinder Mohinder Singh",
    "Adeel Mohammad Qureshi",
    "Kashan Ali Raza",
    "Sarah Mehnaz Verma",
    "Khalid Shah Akhtar",
    "Shamim Mohammad Begum",
    "Alok Sandeep Gupta",
    "Fahad Tariq Khan",
    "Parveen Shagufta Kapoor",
    "Nashit Ali Faiz",
    "Wajid Rashid Malik",
    "Saanvi Kumari Mishra",
    "Faraz Ali Khokhar",
    "Rehmat Malik Rahim",
    "Azhar Mohammad Rizvi",
    "Nazia Khushboo Jamil",
    "Mohammad Tanveer Shah",
    "Lina Rahima Bukhari",
    "Vikram Rajesh Sharma",
    "Ameer Mohammad Siddiqui",
    "Sahil Tanveer Choudhury",
    "Tariq Farhan Malik",
    "Areeba Mehmood Qamar",
    "Labib Mahfuz Tonay",
    "Abid Nourose",
    "Md. Efthakar Sarker Siam",
    "Md. Shadman Sakib Nice",
    "Salman Sadik Siam",
  ],
  Europe: [
    "Eva M. Johansen",
    "Lucille A. Linden",
    "Matthias W. Schmidt",
    "Ingrid S. Berg",
    "Frederick T. Keller",
    "Sofia G. Hansen",
    "Nikolai T. Petrov",
    "Helena M. Olsson",
    "Henrik S. Norberg",
    "Laura R. Jonsson",
    "Axel M. Olofsson",
    "Stella F. Holm",
    "Frederik T. Bruns",
    "Hans M. Fischer",
    "Maria S. Kleist",
    "Otto F. Werner",
    "Ida S. Lunde",
    "Karl M. Andersen",
    "Linda P. Lindqvist",
    "Aksel S. Rydberg",
    "Henrik P. Fritzen",
    "Bente A. Persson",
    "Erik M. Bjork",
    "Sigrid H. Nilsen",
    "Frode S. Hansen",
    "Olaf M. Sorensen",
    "Beate R. Hammer",
    "Jonas T. Lind",
    "Bjørn S. Jansen",
    "Kari A. Svensson",
    "Dagmar H. Christiansen",
    "Johan T. Arnesen",
    "Liv S. Nilsen",
    "Kristian B. Smedstad",
    "Frida M. Voss",
    "Sigurd E. Solberg",
    "Tove R. Hagen",
    "Gunnar M. Stensrud",
    "Maja L. Haug",
    "Anders S. Holmberg",
    "Gitte A. Rasmussen",
    "Per E. Knutsen",
    "Marit K. Jørgensen",
    "Lars J. Sørensen",
    "Linda P. Aasen",
    "Signe M. Dahl",
    "Knut E. Johannessen",
    "Heidi M. Nilsson",
    "Mats L. Nyberg",
    "Eva S. Sandberg",
    "Lars P. Andersson",
    "Bente T. Strom",
    "Ola F. Granli",
    "Mona A. Haug",
    "Mikkel A. Lind",
    "Nils M. Wall",
    "Sverre A. Olofsson",
    "Lisbeth A. Vik",
    "Kjell T. Henriksen",
    "Irene S. Rønning",
    "Olav M. Rygg",
    "Ellen M. Sørensen",
    "Håkon E. Jacobsen",
    "Morten L. Martinsen",
    "Anne L. Solheim",
    "Ole A. Gudmundsen",
    "Hilde R. Hagen",
    "Tor M. Holm",
    "Tina F. Wold",
    "Daniel T. Nilsen",
    "Knut F. Sjøberg",
    "Frederik L. Giertsen",
    "Magnar T. Pedersen",
    "Helga T. Finnestad",
    "Lena K. Helland",
    "Knut T. Steffensen",
    "Nina E. Falk",
    "Niels B. Nesheim",
    "Caroline S. Torgersen",
    "Pål M. Johansen",
    "Mikael M. Håland",
    "Linda E. Borgersen",
    "Marit H. Aune",
    "Tomas F. Brevik",
    "Jens T. Bentsen",
    "Rita F. Davidsen",
    "Siv A. Reinertsen",
    "Mats P. Lønning",
    "Fredrik H. Skaar",
    "Liv E. Rørvik",
    "Kristine F. Storli",
    "Berit E. Bjørndal",
    "Morten K. Jørgensen",
    "Maria B. Nilsen",
    "Bente P. Holst",
    "Helga M. Sætre",
    "Oliver Smith",
    "Charlotte Johnson",
    "Liam Brown",
    "Sophia Jones",
    "Ethan Williams",
    "Mia Davis",
    "Lucas Miller",
    "Amelia Wilson",
    "Benjamin Moore",
    "Harper Taylor",
    "Sebastian Anderson",
    "Evelyn Thomas",
    "Alexander Martinez",
    "Isabella Garcia",
    "Jack Robinson",
    "Scarlett Lee",
    "Daniel Walker",
    "Hazel Allen",
    "Matthew Young",
    "Avery King",
    "James Scott",
    "Aria Harris",
    "Samuel Wright",
    "Chloe Hill",
    "William Green",
    "Lily Adams",
    "Henry Perez",
    "Zoe Nelson",
    "George Carter",
    "Maya Mitchell",
    "David Rodriguez",
    "Lucy Perez",
    "Noah Sanchez",
    "Ella Clark",
    "Michael Lewis",
    "Grace Evans",
    "Logan Young",
    "Victoria Hall",
    "Jackson King",
    "Ava Green",
    "Ryan Harris",
    "Sophie Baker",
    "Andrew Nelson",
    "Sienna Collins",
    "Owen Perez",
    "Emily Edwards",
    "Joseph Stewart",
    "Amos Foster",
    "Mason Thomas",
    "Isla Wright",
    "Gabriel Moore",
    "Chloe Reed",
    "Lorenzo Scott",
    "Natalie Cooper",
    "Leo Campbell",
    "Megan Ward",
    "Dylan Ross",
    "Eloise Morris",
    "Julian Bennett",
    "Emma White",
    "Luke Kelly",
    "Hannah Roberts",
    "Isaac James",
    "Madeline Bailey",
    "Arthur Foster",
    "Amos Griffin",
    "Sophia Martinez",
    "Frederick Gray",
    "Catherine Cox",
    "Jack Watson",
    "Isabelle Hayes",
    "Thomas Jenkins",
    "Olivia Russell",
    "Alexander Bell",
    "Ivy Simpson",
    "Caleb Peterson",
    "Mila Campbell",
    "Sebastian Parker",
    "Elizabeth Brooks",
    "Finn Wood",
    "Adeline Hughes",
    "Matthew Turner",
    "Harper Foster",
    "William Reed",
    "Clara Alexander",
    "Ethan Sanchez",
    "Ariana Rivera",
    "Caden Cook",
    "Grace Butler",
    "Lucas Evans",
    "Victoria Jenkins",
    "Benjamin Lee",
    "Alice Mitchell",
    "Lucas Gonzalez",
    "Maya Perez",
    "Jack Murphy",
    "Ivy Clark",
    "James Watson",
    "Ella Brooks",
    "Nathan Mitchell",
    "Isla Wright",
    "Mason Young",
    "Paige Collins",
    "Ryan Lee",
    "Zara Wilson",
    "Joseph Harris",
    "Charlotte Roberts",
    "Zane Peterson",
    "Harley Morris",
    "Maxwell Green",
    "Sophie Taylor",
    "Leo White",
    "Matthew Brown",
    "Lena Gray",
    "Samuel Young",
    "Lily Williams",
    "Owen White",
    "Ella Collins",
    "Finn Hayes",
    "Nina Reed",
    "Zoe Morris",
    "James Thomas",
    "Emma Scott",
    "Mason Miller",
    "Leah Roberts",
    "Harry Kane",
    "Cristiano Ronaldez",
    "Elisabeth Mueller",
  ],
  "South America": [
    "Juan P. Gonzalez",
    "Maria L. Rodriguez",
    "Luis A. Martinez",
    "Ana C. Lopez",
    "Carlos S. Fernandez",
    "Sofia R. Torres",
    "Gabriel D. Castillo",
    "Valentina M. Ramirez",
    "Felipe J. Sanchez",
    "Luciana G. Gomez",
    "Javier R. Vargas",
    "Camila A. Mendoza",
    "Diego F. Suarez",
    "Isabella T. Herrera",
    "Mateo S. Morales",
    "Fernanda P. Rojas",
    "Sebastian M. Ortiz",
    "Juliana K. Aguilar",
    "Miguel T. Perez",
    "Emilia R. Chavez",
    "Jose L. Pena",
    "Victoria A. Alvarado",
    "Andres P. Vega",
    "Daniela L. Carrasco",
    "Francisco R. Benitez",
    "Gabriela T. Soto",
    "Hugo P. Arias",
    "Clara S. Ramirez",
    "Ricardo F. Cardenas",
    "Antonia R. Vargas",
    "Pablo S. Medina",
    "Florencia A. Jimenez",
    "Santiago G. Vargas",
    "Martina T. Gutierrez",
    "Joaquin L. Paredes",
    "Mariana A. Espinoza",
    "Rafael J. Castro",
    "Camila R. Silva",
    "Eduardo A. Cruz",
    "Adriana T. Flores",
    "Leonardo F. Soto",
    "Carmen R. Navarro",
    "Nicolas M. Guerrero",
    "Paula L. Salazar",
    "Alejandro T. Munoz",
    "Bianca S. Sandoval",
    "Victor F. Vargas",
    "Lucia R. Hidalgo",
    "Pedro J. Villanueva",
    "Laura G. Tapia",
    "Mateo Fernández",
    "Sofia González",
    "Juan Pérez",
    "Valentina Rodríguez",
    "Diego Martínez",
    "Camila López",
    "Gabriel García",
    "Isabella Torres",
    "Lucas Silva",
    "Mariana Sánchez",
    "Andrés Morales",
    "Juliana Díaz",
    "Carlos Romero",
    "Ana Torres",
    "Pedro González",
    "Lucía Martínez",
    "José García",
    "Mía Hernández",
    "Felipe Díaz",
    "Valeria Castro",
    "Santiago Vargas",
    "Renata Gómez",
    "Antonio Cruz",
    "Victoria Mendoza",
    "Sergio Ramos",
    "Florencia García",
    "Emiliano López",
    "Agustina Pérez",
    "Alejandro Ruiz",
    "Camila Reyes",
    "David Herrera",
    "Paula Sánchez",
    "Nicolás Rodríguez",
    "Guadalupe Torres",
    "Carlos Vargas",
    "María Silva",
    "Rodrigo Martínez",
    "Lina Castro",
    "Fernando Pérez",
    "Gabriela Hernández",
    "Adrián García",
    "Lourdes Sánchez",
    "Ricardo López",
    "Solange Silva",
    "Felipe Soto",
    "Cristina Ruiz",
    "Mauricio Torres",
    "Adriana González",
    "Tomás Martínez",
    "Sofía Herrera",
    "José Luis Rodríguez",
    "Gabriela López",
    "Pablo Romero",
    "Carolina Díaz",
    "Iván Pérez",
    "Diana Ruiz",
    "Raúl Rodríguez",
    "Elena Cruz",
    "Luis Sánchez",
    "Natalia Morales",
    "Federico García",
    "Martín Díaz",
    "Lorena González",
    "Manuel Soto",
    "Paola Herrera",
    "Antonio Martínez",
    "Silvana Fernández",
    "Sebastián Pérez",
    "Marta Romero",
    "Ramón Ruiz",
    "Camila Fernández",
    "Ricardo García",
    "Esteban Rodríguez",
    "René López",
    "Sandra Cruz",
    "Luciana Martínez",
    "José Antonio González",
    "Mónica Vargas",
    "Eduardo Díaz",
    "Liliana Romero",
    "Javier Soto",
    "Patricia Torres",
    "Carlos Mendoza",
    "Ariana López",
    "Martín González",
    "Laura Hernández",
    "Carlos Pérez",
    "Santiago Morales",
    "Raquel Rodríguez",
    "Federico Fernández",
    "Carla Torres",
    "Marcos Gómez",
    "Valentina Martínez",
    "Manuela Rodríguez",
    "Gabriel Romero",
    "Diego Soto",
    "César Pérez",
    "Fernanda Díaz",
    "Sofía Torres",
    "Oscar Romero",
    "Lucía González",
    "Jorge Sánchez",
    "Susana González",
    "Antonio Pérez",
    "Beatriz López",
    "Carlos Herrera",
    "Emilia Cruz",
    "Alejandra Silva",
    "Eduardo González",
    "Juan Carlos Rodríguez",
    "Patricia Sánchez",
    "Carlos Ruiz",
    "Gisela González",
    "Rafael Pérez",
    "Victoria Fernández",
    "Mariana González",
    "Fabiola López",
    "Juan Manuel Rodríguez",
    "José Romero",
    "Simona Sánchez",
    "Alfredo Pérez",
    "Elena Ruiz",
    "Leandro Rodríguez",
    "Laura García",
    "Ezequiel Torres",
    "Marta Soto",
    "Rosa Pérez",
    "Eduardo López",
    "Lionel Mesiasa",
    "Luisa Fernández",
    "Javier González",
    "Georgina Rodrigez",
    "Juan Carlos Romero",
  ],
  Africa: [
    "Abdullah M. Abdi",
    "Aisha S. Mohammed",
    "Samuel T. Okafor",
    "Fatima R. Yusuf",
    "Ahmed J. Hassan",
    "Nia P. Abebe",
    "Musa F. Bello",
    "Chinwe K. Eze",
    "Amara J. Nwosu",
    "Kwame S. Mensah",
    "Zainab T. Ibrahim",
    "David R. Osei",
    "Maryam L. Ahmed",
    "Elijah S. Adebayo",
    "Adama T. Traore",
    "Ayomide M. Oluwaseun",
    "Amina S. Diallo",
    "Joseph T. Ngugi",
    "Zanele R. Mthembu",
    "Daniel F. Onyango",
    "Bintu K. Sesay",
    "Emmanuel L. Dlamini",
    "Olivia S. Owusu",
    "Hassan P. Abdirahman",
    "Evelyn M. Kabore",
    "Thabo R. Nkosi",
    "Kofi J. Baah",
    "Naomi S. Kamara",
    "Lekan T. Adeoye",
    "Esther M. Moyo",
    "Abdul K. Suleiman",
    "Ifeanyi J. Uche",
    "Fatou P. Sow",
    "Chike R. Nwachukwu",
    "Lila S. Mazrui",
    "Omolara T. Alabi",
    "Ahmed M. Hamza",
    "Tendai J. Chiwenga",
    "Mariam L. Jalloh",
    "Bongani R. Sibanda",
    "Rebecca T. Wanjiru",
    "Khadija S. Said",
    "Ibrahim J. Koroma",
    "Deborah M. Nyambura",
    "Nelson K. Adjei",
    "Zubair S. Mahamat",
    "Ruth P. Mangena",
    "Farida L. Mukasa",
    "Elvis T. Obeng",
    "Gloria M. Nyoni",
    "Amina Niazi",
    "Kwame Mensah",
    "Zainab Olayemi",
    "Tariq Moyo",
    "Fatima Kamara",
    "Jabari Ndlovu",
    "Nia Sani",
    "Omar Adamu",
    "Ama Nkrumah",
    "Kofi Adebayo",
    "Chimamanda Okoro",
    "Bola Alabi",
    "Tunde Adeyemi",
    "Sade Mthembu",
    "Kehinde Oluwaseun",
    "Nnamdi Chukwuma",
    "Makena Mwangi",
    "Juma Mohamed",
    "Eshe Nyathi",
    "Ayodele Akinyele",
    "Bongi Ncube",
    "Kwesi Boateng",
    "Sanele Dlamini",
    "Laila Hassan",
    "Musa Mamba",
    "Chika Igbokwe",
    "Ifunanya Okafor",
    "Aminata Kone",
    "Sibusiso Moyo",
    "Dalia Ibrahim",
    "Esi Appiah",
    "Chinonso Nwosu",
    "Chidinma Adesanya",
    "Yara Konaté",
    "Abdul Karim",
    "Tebogo Khumalo",
    "Alicia Diallo",
    "Kwadwo Owusu",
    "Siyanda Ndlovu",
    "Zanele Ncube",
    "Kofi Atta",
    "Nuru Sulaiman",
    "Makaila Toure",
    "Micheal Okoro",
    "Miriam Amadou",
    "Juma Lamine",
    "Abena Owusu",
    "Lulama Dube",
    "Nia Mumba",
    "Tinashe Zulu",
    "Ngozi Chikezie",
    "Shakira Mohamed",
    "Nkosi Ndlovu",
    "Aminata Sow",
    "Bashir Kamal",
    "Farida Kante",
    "Nia Tsegaye",
    "Aminata Ba",
    "Sibongile Ndlela",
    "Kabelo Mokoena",
    "Aliou Diop",
    "Thando Dlamini",
    "Mamadou Toure",
    "Kamara Fofana",
    "Musa Adama",
    "Nnamdi Obinna",
    "Chibuike Adebayo",
    "Thabo Mbatha",
    "Tariro Chirwa",
    "Amina Mbuyi",
    "Amara Okafor",
    "Benedicta Owusu",
    "Kofi Abubakar",
    "Zainab Fola",
    "Ifeoma Azubuike",
    "Thulani Zuma",
    "Emmanuelle Toure",
    "Solange Fofana",
    "Akinyi Ochieng",
    "Nia Amara",
    "Julius Bakare",
    "Fatu Jalloh",
    "Lulu Kaba",
    "Raheem Adesanya",
    "Siti Khamis",
    "Kemi Akinbode",
    "Lwazi Khumalo",
    "Chika Onyema",
    "Sefu Mbaya",
    "Ezekiel Afriyie",
    "Bimpe Akinlolu",
    "Musa Sankoh",
    "Adama Camara",
    "Zuberi Makinde",
    "Nia Kamara",
    "Seth Okello",
    "Sulaiman Ndiaye",
    "Kofi Attah",
    "Aminata Kouadio",
    "Dumisa Ntuli",
    "Lesedi Tshabalala",
    "Salimata Keita",
    "Fola Akintoye",
    "Julius Kamara",
    "Folasade Olumide",
    "Ayanfe Ogunleye",
    "Moussa Kone",
    "Odalis Khamis",
    "Nomvula Mbatha",
    "Makena Kibet",
    "Aminata Bah",
    "Nana Adom",
    "Chikezie Ugwu",
    "Sindi Msimango",
    "Aliyah Nkosi",
    "Marama Mbuya",
    "Tariq Nasser",
    "Adeleke Adebayo",
    "Abdi Ali",
    "Musa Adamu",
    "Nandi Sibiya",
    "Thabo Maduna",
    "Ndidi Igwe",
    "Wangari Wanjiru",
    "Khalil Fall",
    "Simeon Okeke",
    "Oluwaseun Akinola",
  ],
  "North America": [
    "James Anderson",
    "Olivia Taylor",
    "John Harris",
    "Emma Clark",
    "William Walker",
    "Ava King",
    "David Lewis",
    "Sophia Scott",
    "Michael Johnson",
    "Isabella Martinez",
    "Benjamin Perez",
    "Mia Carter",
    "Elijah Turner",
    "Chloe Ramirez",
    "Daniel Nelson",
    "Amelia Moore",
    "Ethan Brown",
    "Charlotte Adams",
    "Matthew Wilson",
    "Abigail Lee",
    "Lucas Mitchell",
    "Ella Davis",
    "Alexander Garcia",
    "Grace Robinson",
    "Jack Thompson",
    "Lily White",
    "Samuel Rodriguez",
    "Zoe Clark",
    "Jackson Young",
    "Scarlett Harris",
    "Gabriel Gonzalez",
    "Sophie Martinez",
    "Henry Wright",
    "Victoria Hall",
    "Michael Carter",
    "Emily Perez",
    "Leo Evans",
    "Megan Lewis",
    "Christopher Hall",
    "Hannah King",
    "Andrew Scott",
    "Eva Bennett",
    "Thomas Young",
    "Lila Evans",
    "Ryan Phillips",
    "Samantha Anderson",
    "Joshua Taylor",
    "Amos Walker",
    "Nora Clark",
    "Mason Mitchell",
    "Sienna Robinson",
    "Evan Harris",
    "Jasmine White",
    "William Phillips",
    "Zara Turner",
    "Lucas Anderson",
    "Sophia Moore",
    "Henry Harris",
    "Lily Garcia",
    "Oliver Evans",
    "Avery Bennett",
    "Caden Davis",
    "Maya Johnson",
    "James Miller",
    "Chloe White",
    "Isaiah Rodriguez",
    "Olivia Lewis",
    "Sebastian Thompson",
    "Emily Clark",
    "Mason Gonzalez",
    "Harrison Allen",
    "Mila Brown",
    "Joseph Smith",
    "Emma Lee",
    "Benjamin Harris",
    "Madeline Young",
    "Thomas Martinez",
    "Evelyn White",
    "Jack Harris",
    "Zoe Johnson",
    "Samuel Garcia",
    "Amelia Walker",
    "Grayson Perez",
    "Aidan King",
    "Leah Taylor",
    "Hudson Brown",
    "Alice Miller",
    "Owen Nelson",
    "Madeline Davis",
    "Ryan Scott",
    "Natalie Williams",
    "Joshua Lewis",
    "Oliver Brown",
    "Sophie Harris",
    "Matthew Taylor",
    "Charlotte Evans",
    "Daniel White",
    "Parker Wright",
    "Levi Rodriguez",
    "Emma Mitchell",
    "Maxwell Carter",
    "Maddox King",
    "Megan Harris",
    "Owen Young",
    "Ella Phillips",
    "Lucas Rodriguez",
    "Olivia Taylor",
    "David Martin",
    "Ava Evans",
    "Mia Clark",
    "William Johnson",
    "Sofia Brown",
    "Elijah King",
    "Charlotte Moore",
    "Henry Anderson",
    "Jackson Brown",
    "Isla Lee",
    "Gabriel Hall",
    "Archer Scott",
    "Scarlett Thompson",
    "Miles Harris",
    "Olivia Mitchell",
    "Benjamin Allen",
    "Eliot Walker",
    "Madeline Green",
    "Jaxon Davis",
    "Sophia Nelson",
    "Victoria Robinson",
    "Christopher Moore",
    "Lucas Harris",
    "Lillian Young",
    "John T. Wilson",
    "Jessica L. Montgomery",
    "Sarah P. Adams",
    "Michael R. Roberts",
    "Stephanie F. Blake",
    "William T. Evans",
    "David P. Reed",
    "Emily G. Carter",
    "Rachael S. Lewis",
    "George M. Harris",
    "Catherine R. Grant",
    "Oliver J. Jackson",
    "Andrew W. Scott",
    "Lauren K. Hall",
    "Thomas C. Baker",
    "Natalie J. Parker",
    "Stephen M. Stevens",
    "Brian S. Foster",
    "Victoria T. Mason",
    "Joshua H. Graham",
    "Samantha A. Jackson",
    "Daniel S. Blake",
    "Olivia P. Johnson",
    "Kevin D. Young",
    "Hannah M. Wright",
    "Ryan C. Smith",
    "Sarah A. Daniels",
    "Charles J. Clark",
    "Karen S. Mitchell",
    "Brian L. James",
    "Rebecca M. Roberts",
    "Jacob W. Taylor",
    "Linda P. Evans",
    "Matthew S. Carter",
    "Diane E. Powell",
    "Eric T. Green",
    "Katherine L. Scott",
    "Peter M. White",
    "William A. Wright",
    "Grace F. Lee",
    "Henry M. Stone",
    "Oliver T. Clark",
    "Michelle P. Parker",
    "Matthew F. Davis",
    "Abigail L. Adams",
    "Thomas F. Miller",
    "Holly R. Young",
    "David C. Brooks",
    "Samantha B. Harris",
    "Julia S. Carter",
    "Douglas M. Lewis",
    "Chad A. Turner",
    "Maria L. Young",
    "Cynthia M. Walker",
    "Jordan C. Cooper",
    "Jasmine S. Mitchell",
    "Robert J. Brooks",
    "Alice K. Stevens",
    "Evan F. Palmer",
    "Kaitlyn A. Wright",
    "Zachary T. Sanders",
    "Jared M. Davis",
    "Melissa D. Turner",
    "Patrick S. Perry",
    "Rachel P. Foster",
    "Lauren S. Reed",
    "George A. Powell",
    "Emily T. Anderson",
    "Brandon F. Harris",
    "Nina A. Richardson",
    "Samuel M. White",
    "Megan L. Smith",
    "Grant T. Miller",
    "Victoria F. Baker",
    "Tessa R. James",
    "Harold S. Foster",
    "Michaela S. Morgan",
    "Walter T. Adams",
    "David J. Reed",
    "Catherine D. Harris",
    "Timothy P. Perry",
    "Megan A. Clark",
    "Adam R. Ross",
    "Lindsey M. Powell",
    "Zoe K. Campbell",
    "Elliot A. Bennett",
    "Kelsey P. Franklin",
    "Jackson D. Clark",
    "John S. Bailey",
    "Sierra R. Murphy",
    "Drew P. Davidson",
    "Carla L. Martinez",
  ],
  Oceania: [
    "Ethan J. Smith",
    "Ava M. Thompson",
    "Liam A. Williams",
    "Olivia P. Brown",
    "Jack E. Moore",
    "Chloe M. Taylor",
    "Lucas P. Wilson",
    "Grace A. Johnson",
    "Charlie R. Lee",
    "Hannah M. Harris",
    "Oscar S. Clark",
    "Evelyn J. Young",
    "Benjamin M. King",
    "Lily T. Roberts",
    "Sophie R. Hall",
    "Noah C. White",
    "Ella F. Walker",
    "Sebastian M. Adams",
    "Ruby H. Lewis",
    "Alexander B. Hall",
    "Mia J. Anderson",
    "Thomas L. Miller",
    "Charlotte C. Carter",
    "Maxwell A. Davies",
    "Zoe L. Taylor",
    "William C. Green",
    "Amelia S. Scott",
    "Harper J. Brown",
    "Jack T. Johnson",
    "Lucas F. Lee",
    "Zoe A. Walker",
    "James L. Williams",
    "Emily J. Thompson",
    "Chloe B. Davis",
    "Ethan T. Moore",
    "Archer S. Wilson",
    "Madeline M. Clark",
    "Oscar J. Lee",
    "Ella T. Brown",
    "Jackson R. Carter",
    "Isla M. Smith",
    "Cooper L. Harris",
    "Sophie B. Taylor",
    "Finn J. McDonald",
    "Georgia A. Stevens",
    "Ella R. Mitchell",
    "Tyler T. Thompson",
    "Charlotte M. Johnson",
    "Nate A. Walker",
    "Lucy E. Morgan",
    "Oliver P. Clarke",
    "Grace T. Adams",
    "Ella T. Murphy",
    "Chase D. Baker",
    "Nathan M. Brown",
    "Anna S. Scott",
    "Noah S. Turner",
    "Sophie T. Anderson",
    "Evan M. Lewis",
    "Kai T. Richards",
    "Megan J. Robinson",
    "Isaac E. Scott",
    "Dylan F. White",
    "Olivia L. Clark",
    "Jack F. Phillips",
    "Amelia R. Nelson",
    "Charlotte E. Kelly",
    "Zachary A. Smith",
    "Lilly R. Green",
    "Oliver M. Daniels",
    "Lucas T. Adams",
    "Eva M. Martin",
    "Liam R. Wood",
    "Ryan M. Hall",
    "Oscar P. Johnson",
    "Ruby J. Harris",
    "Mason T. Thomas",
    "Sophie R. Foster",
    "Harriet A. King",
    "Harper E. Richardson",
    "Ruby P. Scott",
    "Ethan R. Harris",
    "Emma M. Evans",
    "Ben T. Hughes",
    "Jacob E. Thompson",
    "Chloe R. Dawson",
    "Ryan K. Wilson",
    "Aroha Smith",
    "Liam Williams",
    "Tama Hemi",
    "Māia Clark",
    "Jackson Brown",
    "Nina Thomas",
    "Rangi Walker",
    "Tane Johnson",
    "Te Rina Harris",
    "Keanu King",
    "Mereana Davis",
    "Noah Lee",
    "Vana Wendt",
    "Kahu Robinson",
    "Mikaela White",
    "Ethan Heke",
    "Kiri Cooper",
    "Tama Wilson",
    "Ava Jackson",
    "Mason McDonald",
    "Leilani Smith",
    "Taniwha Harris",
    "Sophie Miller",
    "Riley Clarke",
    "Jayden Roberts",
    "Iona Wilson",
    "Hemi Stone",
    "Kiara Brown",
    "Rarangi Thompson",
    "Bodhi Edwards",
    "Hana Baker",
    "Te Paea Grant",
    "Samara King",
    "Ruben Fletcher",
    "Nadia Walker",
    "Levi Hughes",
    "Hinewai Green",
    "Koro McLeod",
    "Kiwi Clark",
    "Kara Morris",
    "Maximus Reid",
    "Taina Hill",
    "Layla Anderson",
    "Ariana Johnston",
    "Pua Atkinson",
    "Shannon Rivers",
    "Lana Taylor",
    "Jade Simpson",
    "Tāne Williams",
    "Te Ao Garcia",
    "Harper Fisher",
    "Zane Cameron",
    "Mikaela Brown",
    "Tuatara Moore",
    "Makana Chapman",
    "Kahu Hart",
    "Ella Simpson",
    "Kai Stevens",
    "Hekia Mathews",
    "Maxine Kelly",
    "Iwi Thompson",
    "Vera Murray",
    "Tauana Powell",
    "Kiritahi Hunter",
    "Nia Adams",
    "Mateo Young",
    "Moana Moore",
    "Elliot Parker",
    "Tiare Faulkner",
    "Sophie Mackenzie",
    "Rohan Smith",
    "Harriett Hill",
    "Harrison Boyd",
    "Lily Phillips",
    "Lana Bishop",
    "Tāwhiri Grant",
    "Kiana Jansen",
    "Irene Williams",
    "Parekura Wright",
    "Eden Cooper",
    "Sevani Reeves",
    "Makayla Lane",
    "Joshua Baker",
    "Tane Poulsen",
    "Olivia Paterson",
    "Tautoko King",
    "Liam Harrington",
    "Paige Clark",
    "Jaxon Walker",
    "Anika Perkins",
    "Isla Barrett",
    "Kaia Lambert",
    "Bryce O'Connor",
    "Rei Hunter",
    "Tiffany Lewis",
    "Aiden McGregor",
    "Nina Cunningham",
    "Kahu Richmond",
    "Ben Walker",
    "Tayla Russell",
    "Riley Robinson",
    "Alika James",
    "Sasha Adams",
    "Zara Ngata",
    "Luke Martin",
    "Teuila Furlong",
    "Lachlan Gallagher",
    "Tui Neville",
    "Ruby Harding",
    "Kai McMillan",
    "Imogen Taylor",
    "Miraia Shaw",
    "Liam James",
    "Kendall Rogers",
    "Emelia Wilson",
    "Marama Cook",
    "Chloe Bennett",
    "Ronan Scott",
    "Lachlan McCulloch",
    "Te Aroha Stevens",
    "Kara Harrison",
    "Nash Graham",
    "Ranae Davis",
    "Finnley White",
    "Tupou Taimani",
    "Ella Scott",
    "Isla Scott",
    "Dylan Phillips",
    "Eva Morris",
    "Ari Williams",
    "Shannon Gray",
    "Tainui Barton",
    "Tiare Thompson",
    "Oren Holden",
    "Samiya Matiu",
    "Vaughan Smith",
    "Tamsin McDonald",
    "Kiani Harrison",
    "Zane Matthews",
    "Te Paea Reynolds",
    "Whetu Martin",
    "Tui Green",
    "Kaela Leach",
    "Maliha McLeod",
    "Fletcher Dunn",
    "Bella Weston",
  ],
};

export const getCitizensData = ({
  count,
  region,
  ageRange,
}: {
  count: number;
  region: keyof typeof peopleNames;
  ageRange?: [number, number];
}) => {
  const names = peopleNames[region];
  const data = [] as CitizensData;
  for (let i = 0; i < count; i++) {
    const name = randArrEl(names);
    const age = ageRange
      ? randInt({ arr: ageRange })
      : randInt({ arr: CITIZENS_AGE_RANGE });
    data.push({
      id: uuidv4().slice(0, 11),
      name,
      age,
    });
  }
  return data;
};

export const getAName = (region: keyof typeof peopleNames) => {
  const names = peopleNames[region];
  return randArrEl(names);
};
