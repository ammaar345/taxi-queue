create table booking(
	id serial not null primary key,
  name text 
);

create table taxi_journey (
	id serial not null primary key,
    start_location text ,
    end_location text  ,
	price decimal(10,2)
);