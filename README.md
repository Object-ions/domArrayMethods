# _DOM Array Methods Project_

#### By **Moshe Atia**

 This project, part of Brad Traversy's '20 Web Projects With Vanilla JavaScript' course on Udemy, visually demonstrates the usage of various JavaScript array methods including map(), filter(), sort(), and reduce(). By interfacing with the Random User Generator API, the project retrieves user data, applies these array methods, and displays the results in a user-friendly format.

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Jest_

## Setup/Installation Requirements

* Clone this repository to your local machine.
`git clone https://github.com/Object-ions/domArrayMethods.git`
* Navigate to the project directory.
* Open the file in the browser.

## Known Bugs

Unknown bugs.

## Functionality

This project, following Brad Traversy's course, begins by making three API calls to fetch random users from the Random User Generator API. Each user's name and a random money value are extracted from the response.

The user data is displayed on the webpage, with buttons provided to manipulate the data through various array methods:

* Add User: Fetches a new user and adds them to the current list.
Double Money: Doubles the money value for all users using the map() method.
* Show Only Millionaires: Filters the users to display only those with more than $1,000,000 using the filter() method.
* Sort by Richest: Sorts the users by their money value in descending order using the sort() method.
* Calculate Entire Wealth: Calculates and displays the total money of all users using the reduce() method.

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Moshe Atia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.