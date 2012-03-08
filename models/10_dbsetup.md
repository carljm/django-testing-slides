<!SLIDE incremental>

## The database makes your tests slow. ##

* Try to write tests that don't hit it at all.
* But you'll still have a lot of tests that do.

.notes The DB is pretty core to most web apps; mocking it makes your tests fast, but I don't think it's worth it.

<!SLIDE incremental>

# `django.test.TestCase` #

* Runs each test within a transaction.
* Rolls back the transaction at the end of the test.
* Monkeypatches transaction functions to be no-ops.

.notes Django tries to make them fast...

<!SLIDE incremental>

# `TransactionTestCase` #

* Lets you test transactions in your code.
* Has to flush every database table after every test.
* Makes your tests extra super bonus slow.

.notes This part of the talk is boring because I have no complaints.
