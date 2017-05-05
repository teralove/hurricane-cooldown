# Hurricane Cooldown

Sends notifications to user when their hurricane has proc'd, remaining time on cooldown, and when it's ready again.


## Chat Commands
* Typing "!hcd" will toggle the notifications on and off


## Known Bugs
* No notification is sent if your hurricane debuff overwrites another hurricane.
The problem is the server sends "C_ABNORMALITY_REFRESH" instead, which has no source data, 
thus unable to determine who casted the new hurricane.


## Changelog 
### 1.2.0
* [+] Changed command to require exclamation prefix '!'
* [+] Command no longer case-sensitive
* [+] Add slash support
* [+] Changed chat notification channels and removed GM tag
### 1.1.0
* [+] Changed time intervals to be every 15s starting from 90s remaining.


![Screenshot](http://i.imgur.com/oMZVc7c.jpg)
