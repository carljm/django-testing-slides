<!SLIDE antipattern>

    @@@ python
    {
        "pk": 4,
        "model": "auth.user",
        "fields": {
            "username": "manager",
            "first_name": "",
            "last_name": "",
            "is_active": true,
            "is_superuser": false,
            "is_staff": false,
            "last_login": "2012-02-06 15:06:44",

<!SLIDE incremental>

# Just say no. #

* Hard to maintain and update.
* Increase test interdependence.
* Slow to load.


<!SLIDE>

# Model factories! #

    @@@ python
    def create_profile(**kwargs):
        defaults = {
            "likes_cheese": True,
            "age": 32,
            "address": "3815 Brookside Dr",
        }
        defaults.update(kwargs)
        if "user" not in defaults:
            defaults["user"] = create_user()
        return Profile.objects.create(
            **defaults)

<!SLIDE>

# Model factories! #

    @@@ python
    def test_can_vote(self):
        """A user older than 18 can vote in the US."""
        profile = create_profile(age=19)
        self.assertTrue(profile.can_vote)


<!SLIDE incremental>

# It's been done. #

* factory_boy
* milkman
* model-mommy
* probably others

<!SLIDE incremental>

# Why factories? #

* Test data local to test code (explicit).
* Easy to maintain.
* Don't create any data you don't need for that test.
* Works great even for large/complex test data sets (helper functions).
