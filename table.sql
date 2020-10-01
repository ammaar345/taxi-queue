create table booking(
	id serial not null primary key,
    names text not null
);

create table taxi_journey (
	id serial not null primary key,
    start_location text not null,
    end_location text  not null,
	price decimal(10,2)
);

create table taxi_regNumbers (
    id serial not null primary key,
	reg_Numbers text not null
);