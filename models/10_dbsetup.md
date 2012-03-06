<!SLIDE incremental>

## The database makes your tests slow. ##

* Try to write tests that don't hit it at all.
* But you're still going to have a lot of tests that do.

<!SLIDE>

# `django/tests/testcases.py` #

    @@@ python
    def _fixture_teardown(self):
      # ...
      restore_transaction_methods()

      for db in databases:
          transaction.rollback(using=db)
          transaction.leave_transaction_management(
              using=db)


<!SLIDE incremental>

# `TestCase` #

* Runs each test within a transaction.
* Rolls back the transaction at the end of the test.
* Monkeypatches transaction functions to be no-ops.


<!SLIDE incremental>

# `TransactionTestCase` #

* Lets you test transactions in your code.
* Has to flush every database table after every test.
* Makes your tests extra super bonus slow.
