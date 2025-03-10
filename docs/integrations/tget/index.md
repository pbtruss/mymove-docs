---
id: index
slug: /backend/guides/tget
---

# TGET

TGET stands for Transportation Global Edit Table. Each service has their own set of valid accounting codes, also known as TAC (transportation accounting codes).

An example of this would be where the TOO (Transportation Ordering Officer) enters a TAC before approving a shipment. A TAC determines who pays for the shipping service (from which account). This TAC needs to be verified as a valid TAC. The MilMove application uses these to make sure that a customers order is valid. However, it should be noted that these codes do change and are updated.

## Context

The current implmentation is based from a sample file that had been parsed to retrieve all the unique TAC values. A new table in the database was made called `transportation_accounting_codes` and a secure migration was done to put all those unique values into the database.

In the MilMove app, when a user enters a value in to the TAC field, a call gets made to our backend to check if the input shows up in the database. If the TAC value is invalid, the user is notified, but still allowed to proceed.

In the future, an SFTP connection would potentially be made to retrieve the updated file.

## Resources

- This is the [Appendix to TAC procedures](https://www.ustranscom.mil/dtr/part-ii/dtr_part_ii_app_v.pdf) and gives an overview of TACs, what they are, and how to maintain them.

- A slightly newer [Google Drive folder that contains an example of a TAC file and an overview](https://drive.google.com/drive/folders/1XF8aQNtKuqtHow3xN2UI9w9g7cRT6y-g).

- An older [Google Drive folder that notably contains an architectural design document as well as various related TGET things](https://drive.google.com/drive/folders/1AT6XBR5qtUT2gHP2GSs4ylQ701bZf_dV).

- An [architectural design document that details how TGET would be incorporated into the application and how it would get updated](https://docs.google.com/document/d/11RAVk9uGCOW7Uk5ZBDFLtel-YY-uVqtj/edit#).

- [Pull request that adds the transportation_accounting_codes table](https://github.com/transcom/mymove/pull/5922).

- [Code location where the transportation_accounting_codes table is used inside of the MilMove application](https://github.com/transcom/mymove/blob/b46b8e1f245174532fd9287eb8abd950ccb89aa3/pkg/handlers/ghcapi/tac.go#L23).
