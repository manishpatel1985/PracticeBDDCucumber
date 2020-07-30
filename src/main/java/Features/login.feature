Feature: Login

#Scenario: Login with correct login values


#Given  user launch the browser
#Then user enters url 
#Then user enters username "rahul.sanghavi.mca@gmail.com" and password "rahul12345"
#Then user click on login button
#And user will on home page
#Then user close the browser


Scenario Outline:: Login with correct login values 


Given  user launch the browser
Then user enters url 
Then user enters username "<username>" and password "<password>"
Then user click on login button
And user will on home page
Then user close the browser

Examples:

|username|passwrod|
|rahul.sanghavi.mca@gmail.com|rahul12345|
|manishpatel1985@googlemail.com|July2020|
|hetalpatel@gmail.com|12345|
