# A Mobile app, in PHP?

EventPress is a really popular product and one of the most used features is the on-site Check-in system.

The check-in system (or "checkins" as we refer to it) allows clients to register or check guests into
an event as they arrive. Guests are issued with QR codes and EventPress provides an in-browser scanner
that will then mark that guest as "attended".

The only downside is that every device used to scan guests in must be connected to the internet at all
times.

A native, mobile app is something we've considered for a long time, but in 2025 we finally started
working on something.

## First Attempts

Our first attempt was to build something using Flutter. I really like Flutter, and although my skills
are still somewhat basic, we did actually manage to get a simple version working. But the app eventually
fell by the wayside as more important tasks to over.

In late 2024, I invested in the NativePHP mobile project and bought a license. I re-built our original
idea using NativePHP but it wasn't perfect. However, with the release of NativePHP 2, we could finally
get our simple offline checkin tool working.

The app is still in the testing phase and there are some changes that will need to be implemented,
but the project is nearing completion.

## Security

NativePHP provides some clever security tools and all the data stored on the device is encrypted. EventPress
provides a QR code for each checkin enabled event. This QR code (along with a pre-set password) allows
the device to download all the event response data. Once this is done, the device can operate offline
and still check guests in.

Each guests QR code is scanned and the attendance status is stored locally, but once the device is
online, the user can synchronise data with the EventPress application.

Our first EventPress Mobile Checkin clients will start using the application later this year.
