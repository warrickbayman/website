# Automotive Media Dissemination

MotorPress was the first semi-large application I worked on. It was originally built using CodeIgnitor,
but after running that version for around 3 years, it was rebuilt from the ground up using Laravel
(version 5 back then).

MotorPress is the largest automotive media distribution platform in South Africa. Clients include the
likes of Audi, BYD, Changan, Daimler Truck, Datsun, Ford, Hino, Honda, Jaguar Land Rover, Jetour, Kia,
and a plenty more.

Clients provide content for press releases including text, image, video, and audio. MotorPress
provides a clean environment where journalists and publications can find the content they need.

MotorPress also managed a fairly large database of contacts within the automative industry, and content
is delivered directly to their inboxes when press-releases are published.

## Lessons in Email

One of the biggest lessons I learnt from MotorPress was how to deal with Email. Even right in the
beginning we were sending larger volumes of emails than I had ever dealt with before. In those early
days, we even managed our on SMTP server for sending mass mail, but we quickly migrated to the likes
of MailGun. Today MotorPress delivers around 300 thousand emails a month.
