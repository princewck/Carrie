use carrie;

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
   `statue` boolean default true,
   PRIMARY KEY ( `id` )
)ENGINE=MyISAM DEFAULT CHARSET=utf8;
