The database schema is, I think, a fairly standard one for its kind. It neatly
separates out all the disparate categories of information, while being designed
for query flexibility and searchability in the future. 

Tables:
--
(note that primary key ID columns are assumed to be present for every table)

Users:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
|first_name | text NOT NULL | User's first name |
|last_name | text NOT NULL | User's last name |
|school | ForeignKey to Schools table NOT NULL | Key to user's school |
|shirt_size | ForeignKey to Shirt_Sizes table NOT NULL | Key to shirt size |
|first_hackathon | boolean NOT NULL | Is this their first hackathon? |
|why_owlhacks | text | short text blurb about why they chose owlhacks|
|hack_type | ForeignKey to Hack_Types table NOT NULL | what kind of hack are they planning? |
|resume | bytea (binary) | binary blob representing their resume |
|github | text | their github url |
|twitter | text | their twitter handle |
|password | text NOT NULL | their password, stored as bcrypted string |
|email | text NOT NULL | their email address | 

Accounts:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| user_id | ForeignKey to Users table NOT NULL | Key to account's user entity |
| status_id | ForeignKey to Statuses table NOT NULL | Key to Status table |

Schools: 

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| school | text NOT NULL | school name |

Shirt_sizes:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| Shirt_size | varchar(3) NOT NULL | XXS, XS, S, M, L, XL, XXL |

Statuses:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| account_status | text | waiting, waitlisted, declined, accepted |

Hack_Types:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| type | text | specialized type of hack. Should include a blank row in case they don't specify. |

Allergies:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| allergy | text | name of an allergy |

UserAllergies:

| Column name | Data type | Description |
| ----------- | --------- | ----------- |
| user_id | ForeignKey to Users table | user who has allergy |
| allergy_id | ForeignKey to Allergies table | allergy user has |
