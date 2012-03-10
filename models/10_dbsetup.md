<!SLIDE incremental>

## The database makes your tests slow. ##

* Try to write tests that don't hit it at all.
* Separate db-independent model-layer functionality from db-dependent
  functionality.
* But you'll still have a lot of tests that do.
* Mocking the database usually isn't worth it.

<!SLIDE>

    @@@ python
    class Thing(models.Model):
      def frobnicate(self):
        """Frobnicate and save the thing."""
        # ... do something complicated
        self.save()


<!SLIDE>

    @@@ python
    def frobnicate_thing(thing):
      # ... do something complicated
      return thing


    class Thing(models.Model):
      def frobnicate(self):
        """Frobnicate and save the thing."""
        frobnicate_thing(self)
        self.save()

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
