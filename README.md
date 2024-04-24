# Work Experience Pages

## About The Work Experience Pages

This part of the website is developed as a tool for managing and displaying my work experiences, built with Node.js and Parcel. The site is an educational project that demonstrates how to build web applications and integrate external API calls.

## Database Server Information

The site uses external API calls to communicate with a server that handles data storage and retrieval. This provides a flexible way to manage data without an internal database.

## Functionalities of the Work Experience Pages

- **View Work Experience:** Browse through listed work experiences.
- **Add Work Experience:** Submit new work experiences to the database.
- **Edit Work Experience:** Update details of existing work experiences.
- **Delete Work Experience:** Remove work experiences from the listing.

## Data Structure from the API

### Collection: Work Experiences

| Column       | Type                | Constraints     |
|--------------|---------------------|-----------------|
| id           | String (MongoDB-ID) | Unique Required |
| companyname  | String              | Required        |
| jobtitle     | String              | Required        |
| location     | String              | Required        |
| startdate    | DATE                | Required        |
| enddate      | DATE                |                 |
| description  | String or empty     |                 |

## Conclusions from the Project

The project has affirmed several technical aspects:

- Front-end based websites are trickier for me to get right than server-based ones.
- Using external APIs allows for scalable data management.
- Proper error handling and user feedback are crucial for ensuring system reliability.
