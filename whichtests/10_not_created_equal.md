<!SLIDE commandline incremental>

# Let's start a project. #

    $ django-admin.py startproject testing .
    
    $ sed -i -e 's/backends\./backends.sqlite3/;' testing/settings.py
    
    $ ./manage.py test
    [snip]
    ----------------------------------------------------------------------
    Ran 412 tests in 14.235s

    FAILED (errors=2, skipped=1)
    Destroying test database for alias 'default'...

.notes (Oops, guess we're not quite ready to release 1.4.)
But 412 tests? 14 extra seconds?

<!SLIDE>

## I'll never get those 14 seconds back. ##

<!SLIDE>

## Not all apps are created equal. ##

.notes Non-isolated tests break, isolated tests are pointless to run.
Integration tests should be written by the integrator.

<!SLIDE>

## No problem. ##

### `./manage.py test just my apps please` ###

.notes Easy to solve with a shell script. But there's more...
