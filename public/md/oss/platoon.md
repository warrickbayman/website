# Opinionated Laravel Deployments

Platoon is a deployment tool built for Laravel. It's fairly opinionated and not
super customizable. It was built to ease deployments for small websites while I was
still working for Mycalture.

Platoon is really just a wrapper around Lavavel Envoy. In fact, there's a stock standard Envoy script that comes with Platoon which can be customized if need be. However, in most cases, we have not needed to modify the script in any way.

Platoon was developed solve for the lack of deployment strategy at Mycalture without needing to spend money on additional tooling. Laravel Forge wasn't really an option yet, and I already had experience with Laravel Envoy. 

I still use Platoon today, even within my own CI/CD pipelines at Gitlab.

There is a comprehensive documentation website for Platoon, which can be found at [https://tpg.github.io/platoon/](https://tpg.github.io/platoon/).

Platoon is still maintained, but doesn't really get a lot of work. I haven't had any need for additional features and it
does what it says on the tin.
