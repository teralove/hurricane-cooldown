# Hurricane Cooldown

Sends notifications to user when their hurricane has proc'd, remaining time on cooldown, and when it's ready again.


## Chat Commands
* Typing ".hcd" will toggle the notifications on and off


## Known Bugs
* No notification is sent if a hurricane debuff overwrites another hurricane. Notifications are only sent if the target has no hurricane currently applied.
The problem is when an abnormality such as hurricane overwrites another hurricane on a target, the server sends "C_ABNORMALITY_REFRESH", which at the moment 
has no source data, thus unable to determine who casted the new hurricane.


## Changelog 
### 1.1.0
* [+] Changed time intervals to be every 15s starting from 90s remaining.


![Screenshot](http://i.imgur.com/oMZVc7c.jpg)
