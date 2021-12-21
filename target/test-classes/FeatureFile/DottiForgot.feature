Feature: To validate Forgot password of dotti forgot page

@regression
Scenario: To validate forgot password with invalid Email Id
Given User should launch the chrome browser and load the dotti url
When User should go to the Drop Down SigIn
And Click the sigIn button
And User should click the forgot password
And User enter the invalid email id
And User should click the Reset Password button
Then User Should Check the url and Navigate to incorrect credential page
