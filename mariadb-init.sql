CREATE TABLE `things` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`date` DATETIME NOT NULL,
	`thing` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`done` BOOLEAN DEFAULT False,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL,
	`username`  VARCHAR(255) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL
	PRIMARY KEY (`id`)
);

insert into `things` (id, date, thing, done) values (null, now(), "Setup the database engine", true);
