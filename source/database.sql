use carrie_sandbox; # sandbox
use carrie; # production

# 创建数据库
CREATE DATABASE IF NOT EXISTS carrie default charset utf8 COLLATE utf8_general_ci;
#sandbox
CREATE DATABASE IF NOT EXISTS carrie_sandbox default charset utf8 COLLATE utf8_general_ci;

# subjects
CREATE TABLE IF NOT EXISTS `subject`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `description` VARCHAR(255) ,
   `sort` int,
   `created_at` timestamp default current_timestamp,
   `updated_at` timestamp ,
   `status` boolean default true,
   PRIMARY KEY ( `id` )
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

# chapters
CREATE TABLE IF NOT EXISTS `chapter` (
	`id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255),
    `sort` INT,
    `created_at` timestamp default current_timestamp,
    `updated_at` timestamp ,
    `status` boolean default true,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;


# tags
CREATE TABLE IF NOT EXISTS `tag` (
	`id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255),
    `sort` INT,
    `image` TEXT,
    `created_at` timestamp default current_timestamp,
    `updated_at` timestamp ,
    `status` boolean default true,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;


# questions
CREATE TABLE IF NOT EXISTS `question` (
	`id` INT UNSIGNED AUTO_INCREMENT,
    `description` TEXT,
    `sort` INT,
    `choices` TEXT,
    `remark` TEXT,
    `answer` TEXT,
    `type` INT comment '试题类型，单选，多选，简答，填空', 
    `created_at` timestamp default current_timestamp,
    `updated_at` timestamp ,
    `status` boolean default true,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

# papers
CREATE TABLE IF NOT EXISTS `paper` (
	`id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(255),
    `description` TEXT,
    `sort` INT,
    `created_at` timestamp default current_timestamp,
    `updated_at` timestamp ,
    `status` boolean default true,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

# users
CREATE TABLE IF NOT EXISTS `user` (
	`id` INT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(255),
    `email` VARCHAR(255),
    `mobile` VARCHAR(255),
    `password` VARCHAR(255),
    `salt` VARCHAR(255),
    `description` TEXT,
    `sort` INT,
    `created_at` timestamp default current_timestamp,
    `updated_at` timestamp ,
    `status` boolean default true,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;
