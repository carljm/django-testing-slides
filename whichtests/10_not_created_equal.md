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


<!SLIDE>

## I'll never get back those 14 seconds. ##

<!SLIDE>

## Not all apps are created equal.  ##

<!SLIDE>

## No problem. ##

### `./manage.py test just my apps please` ###
