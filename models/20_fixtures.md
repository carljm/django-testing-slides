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

.notes Do you have these in your tests? BURN THEM!

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

.notes You can write simple factory functions like this (key benefit is prefilling FKs).

<!SLIDE>

# Using a factory #

    @@@ python
    def test_can_vote(self):
        """A user age 18+ can vote in the US."""
        profile = create_profile(age=18)
        self.assertTrue(profile.can_vote)

.notes BAD example. This test shouldn't touch the DB. So you want a smarter factory that can also build objects without saving.

<!SLIDE incremental>

# Or use `factory_boy`: #

    @@@ python
    class ProfileFactory(factory.Factory):
        FACTORY_FOR = Profile

        likes_cheese = True
        age = 32
        address = "3815 Brookside Dr"
        user = factory.SubFactory(UserFactory)

    profile = ProfileFactory.create(
        age=18, user__username="carljm")

.notes Also there's milkman, model_mommy. I don't like random data generation.

<!SLIDE incremental>

# Why factories? #

* Test data local to test code (explicit).
* Easy to maintain.
* Don't create any data you don't need for that test.
* Works great even for large/complex test data sets (helper functions).
