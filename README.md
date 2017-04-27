Hurricane Cooldown

Sends notifications to user or party when hurricane has proc'd, remaining time on cooldown, and when it's ready again.


## Chat Commands
* Typing ".hc" will toggle the notifications on and off
* Typing ".hc.party" will toggle sending notifications to self or everyone in party.


## Known Bugs
* No notification is sent if a hurricane debuff overwrites another hurricane. Notifications are only sent if the target has no hurricane currently applied.
The problem is when a abnormality such as hurricane overwrites another hurricane on a target, the server sends the "C_ABNORMALITY_REFRESH" packet, 
at the moment, this packet has no source data, thus unable to determine who casted the hurricane.


## Changelog
### 1.1.0
* [+] Changed time intervals to be every 15s starting from 90s remaining.