```sh
ahmed@Ahmeds-MacBook-Pro ~ % pod --version
zsh: command not found: pod
ahmed@Ahmeds-MacBook-Pro ~ % sudo gem install cocoapods                 
Password:
ERROR:  Error installing cocoapods:
	The last version of drb (>= 0) to support your Ruby & RubyGems was 2.0.6. Try installing it with `gem install drb -v 2.0.6` and then running the current command again
	drb requires Ruby version >= 2.7.0. The current ruby version is 2.6.10.210.
ahmed@Ahmeds-MacBook-Pro ~ % curl -L https://get.rvm.io | bash -s stable
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   194  100   194    0     0    164      0  0:00:01  0:00:01 --:--:--   165
100 24532  100 24532    0     0  13663      0  0:00:01  0:00:01 --:--:-- 3422k
df: getattrlist failed: Input/output error
Downloading https://github.com/rvm/rvm/archive/1.29.12.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc
Found PGP signature at: 'https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc',
but no GPG software exists to validate it, skipping.
Upgrading the RVM installation in /Users/ahmed/.rvm/
    RVM PATH line found in /Users/ahmed/.mkshrc /Users/ahmed/.profile /Users/ahmed/.bashrc /Users/ahmed/.zshrc.
    RVM sourcing line found in /Users/ahmed/.profile /Users/ahmed/.bash_profile /Users/ahmed/.zlogin.
Upgrade of RVM in /Users/ahmed/.rvm/ is complete.

Thanks for installing RVM 🙏
Please consider donating to our open collective to help us maintain RVM.

👉  Donate: https://opencollective.com/rvm/donate


ahmed@Ahmeds-MacBook-Pro ~ % rvm install ruby-3.3.0
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/12.6/x86_64/ruby-3.3.0.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
df: getattrlist failed: Input/output error
Checking requirements for osx.
About to install Homebrew in the default location `/usr/local`.

It is possible to select a custom location, however it is not recommended and some things might not work.
You should do it only if you do not have write rights to `/usr/local`.

Press ENTER to install Homebrew in the default location `/usr/local`
or type a custom path (needs to be writable for the current user)
: 
curl: (22) The requested URL returned error: 404
Something went wrong during Homebrew installation,
can not find 'brew' command, please report a bug: https://github.com/rvm/rvm/issues
Requirements installation failed with status: 1.
ahmed@Ahmeds-MacBook-Pro ~ % /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
==> Checking for `sudo` access (which may request your password)...
Password:
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local/Homebrew
==> The following existing directories will be made group writable:
/usr/local/bin
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following existing directories will have their owner set to ahmed:
/usr/local/bin
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following existing directories will have their group set to admin:
/usr/local/bin
/usr/local/include
/usr/local/lib
/usr/local/share
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
==> The following new directories will be created:
/usr/local/etc
/usr/local/sbin
/usr/local/var
/usr/local/opt
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
/usr/local/var/homebrew
/usr/local/var/homebrew/linked
/usr/local/Cellar
/usr/local/Caskroom
/usr/local/Frameworks
==> The Xcode Command Line Tools will be installed.

Press RETURN/ENTER to continue or any other key to abort:
==> /usr/bin/sudo /bin/chmod u+rwx /usr/local/bin /usr/local/include /usr/local/lib /usr/local/share /usr/local/share/doc /usr/local/share/man /usr/local/share/man/man1
==> /usr/bin/sudo /bin/chmod g+rwx /usr/local/bin /usr/local/include /usr/local/lib /usr/local/share /usr/local/share/doc /usr/local/share/man /usr/local/share/man/man1
==> /usr/bin/sudo /usr/sbin/chown ahmed /usr/local/bin /usr/local/include /usr/local/lib /usr/local/share /usr/local/share/doc /usr/local/share/man /usr/local/share/man/man1
==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/bin /usr/local/include /usr/local/lib /usr/local/share /usr/local/share/doc /usr/local/share/man /usr/local/share/man/man1
==> /usr/bin/sudo /bin/mkdir -p /usr/local/etc /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Frameworks
==> /usr/bin/sudo /bin/chmod ug=rwx /usr/local/etc /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Frameworks
==> /usr/bin/sudo /bin/chmod go-w /usr/local/share/zsh /usr/local/share/zsh/site-functions
==> /usr/bin/sudo /usr/sbin/chown ahmed /usr/local/etc /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Frameworks
==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/etc /usr/local/sbin /usr/local/var /usr/local/opt /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew /usr/local/var/homebrew/linked /usr/local/Cellar /usr/local/Caskroom /usr/local/Frameworks
==> /usr/bin/sudo /bin/mkdir -p /usr/local/Homebrew
==> /usr/bin/sudo /usr/sbin/chown -R ahmed:admin /usr/local/Homebrew
==> /usr/bin/sudo /bin/mkdir -p /Users/ahmed/Library/Caches/Homebrew
==> /usr/bin/sudo /bin/chmod g+rwx /Users/ahmed/Library/Caches/Homebrew
==> /usr/bin/sudo /usr/sbin/chown -R ahmed /Users/ahmed/Library/Caches/Homebrew
==> Searching online for the Command Line Tools
==> /usr/bin/sudo /usr/bin/touch /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
==> Installing Command Line Tools for Xcode-14.2
==> /usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ for\ Xcode-14.2
Software Update Tool

Finding available software

Downloading Command Line Tools for Xcode
Downloaded Command Line Tools for Xcode
Installing Command Line Tools for Xcode
Done with Command Line Tools for Xcode
Done.
==> /usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools
Password:
==> /usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
==> Downloading and installing Homebrew...
remote: Enumerating objects: 256149, done.
remote: Counting objects: 100% (840/840), done.
remote: Compressing objects: 100% (512/512), done.
remote: Total 256149 (delta 395), reused 718 (delta 295), pack-reused 255309
Receiving objects: 100% (256149/256149), 74.31 MiB | 3.86 MiB/s, done.
Resolving deltas: 100% (185623/185623), done.
From https://github.com/Homebrew/brew
 * [new branch]          codecov-fix -> origin/codecov-fix
 * [new branch]          deprecation-disable-forks-versions-docs -> origin/deprecation-disable-forks-versions-docs
 * [new branch]          master      -> origin/master
 * [new tag]             0.1         -> 0.1
 * [new tag]             0.2         -> 0.2
 * [new tag]             0.3         -> 0.3
 * [new tag]             0.4         -> 0.4
 * [new tag]             0.5         -> 0.5
 * [new tag]             0.6         -> 0.6
 * [new tag]             0.7         -> 0.7
 * [new tag]             0.7.1       -> 0.7.1
 * [new tag]             0.8         -> 0.8
 * [new tag]             0.8.1       -> 0.8.1
 * [new tag]             0.9         -> 0.9
 * [new tag]             0.9.1       -> 0.9.1
 * [new tag]             0.9.2       -> 0.9.2
 * [new tag]             0.9.3       -> 0.9.3
 * [new tag]             0.9.4       -> 0.9.4
 * [new tag]             0.9.5       -> 0.9.5
 * [new tag]             0.9.8       -> 0.9.8
 * [new tag]             0.9.9       -> 0.9.9
 * [new tag]             1.0.0       -> 1.0.0
 * [new tag]             1.0.1       -> 1.0.1
 * [new tag]             1.0.2       -> 1.0.2
 * [new tag]             1.0.3       -> 1.0.3
 * [new tag]             1.0.4       -> 1.0.4
 * [new tag]             1.0.5       -> 1.0.5
 * [new tag]             1.0.6       -> 1.0.6
 * [new tag]             1.0.7       -> 1.0.7
 * [new tag]             1.0.8       -> 1.0.8
 * [new tag]             1.0.9       -> 1.0.9
 * [new tag]             1.1.0       -> 1.1.0
 * [new tag]             1.1.1       -> 1.1.1
 * [new tag]             1.1.10      -> 1.1.10
 * [new tag]             1.1.11      -> 1.1.11
 * [new tag]             1.1.12      -> 1.1.12
 * [new tag]             1.1.13      -> 1.1.13
 * [new tag]             1.1.2       -> 1.1.2
 * [new tag]             1.1.3       -> 1.1.3
 * [new tag]             1.1.4       -> 1.1.4
 * [new tag]             1.1.5       -> 1.1.5
 * [new tag]             1.1.6       -> 1.1.6
 * [new tag]             1.1.7       -> 1.1.7
 * [new tag]             1.1.8       -> 1.1.8
 * [new tag]             1.1.9       -> 1.1.9
 * [new tag]             1.2.0       -> 1.2.0
 * [new tag]             1.2.1       -> 1.2.1
 * [new tag]             1.2.2       -> 1.2.2
 * [new tag]             1.2.3       -> 1.2.3
 * [new tag]             1.2.4       -> 1.2.4
 * [new tag]             1.2.5       -> 1.2.5
 * [new tag]             1.2.6       -> 1.2.6
 * [new tag]             1.3.0       -> 1.3.0
 * [new tag]             1.3.1       -> 1.3.1
 * [new tag]             1.3.2       -> 1.3.2
 * [new tag]             1.3.3       -> 1.3.3
 * [new tag]             1.3.4       -> 1.3.4
 * [new tag]             1.3.5       -> 1.3.5
 * [new tag]             1.3.6       -> 1.3.6
 * [new tag]             1.3.7       -> 1.3.7
 * [new tag]             1.3.8       -> 1.3.8
 * [new tag]             1.3.9       -> 1.3.9
 * [new tag]             1.4.0       -> 1.4.0
 * [new tag]             1.4.1       -> 1.4.1
 * [new tag]             1.4.2       -> 1.4.2
 * [new tag]             1.4.3       -> 1.4.3
 * [new tag]             1.5.0       -> 1.5.0
 * [new tag]             1.5.1       -> 1.5.1
 * [new tag]             1.5.10      -> 1.5.10
 * [new tag]             1.5.11      -> 1.5.11
 * [new tag]             1.5.12      -> 1.5.12
 * [new tag]             1.5.13      -> 1.5.13
 * [new tag]             1.5.14      -> 1.5.14
 * [new tag]             1.5.2       -> 1.5.2
 * [new tag]             1.5.3       -> 1.5.3
 * [new tag]             1.5.4       -> 1.5.4
 * [new tag]             1.5.5       -> 1.5.5
 * [new tag]             1.5.6       -> 1.5.6
 * [new tag]             1.5.7       -> 1.5.7
 * [new tag]             1.5.8       -> 1.5.8
 * [new tag]             1.5.9       -> 1.5.9
 * [new tag]             1.6.0       -> 1.6.0
 * [new tag]             1.6.1       -> 1.6.1
 * [new tag]             1.6.10      -> 1.6.10
 * [new tag]             1.6.11      -> 1.6.11
 * [new tag]             1.6.12      -> 1.6.12
 * [new tag]             1.6.13      -> 1.6.13
 * [new tag]             1.6.14      -> 1.6.14
 * [new tag]             1.6.15      -> 1.6.15
 * [new tag]             1.6.16      -> 1.6.16
 * [new tag]             1.6.17      -> 1.6.17
 * [new tag]             1.6.2       -> 1.6.2
 * [new tag]             1.6.3       -> 1.6.3
 * [new tag]             1.6.4       -> 1.6.4
 * [new tag]             1.6.5       -> 1.6.5
 * [new tag]             1.6.6       -> 1.6.6
 * [new tag]             1.6.7       -> 1.6.7
 * [new tag]             1.6.8       -> 1.6.8
 * [new tag]             1.6.9       -> 1.6.9
 * [new tag]             1.7.0       -> 1.7.0
 * [new tag]             1.7.1       -> 1.7.1
 * [new tag]             1.7.2       -> 1.7.2
 * [new tag]             1.7.3       -> 1.7.3
 * [new tag]             1.7.4       -> 1.7.4
 * [new tag]             1.7.5       -> 1.7.5
 * [new tag]             1.7.6       -> 1.7.6
 * [new tag]             1.7.7       -> 1.7.7
 * [new tag]             1.8.0       -> 1.8.0
 * [new tag]             1.8.1       -> 1.8.1
 * [new tag]             1.8.2       -> 1.8.2
 * [new tag]             1.8.3       -> 1.8.3
 * [new tag]             1.8.4       -> 1.8.4
 * [new tag]             1.8.5       -> 1.8.5
 * [new tag]             1.8.6       -> 1.8.6
 * [new tag]             1.9.0       -> 1.9.0
 * [new tag]             1.9.1       -> 1.9.1
 * [new tag]             1.9.2       -> 1.9.2
 * [new tag]             1.9.3       -> 1.9.3
 * [new tag]             2.0.0       -> 2.0.0
 * [new tag]             2.0.1       -> 2.0.1
 * [new tag]             2.0.2       -> 2.0.2
 * [new tag]             2.0.3       -> 2.0.3
 * [new tag]             2.0.4       -> 2.0.4
 * [new tag]             2.0.5       -> 2.0.5
 * [new tag]             2.0.6       -> 2.0.6
 * [new tag]             2.1.0       -> 2.1.0
 * [new tag]             2.1.1       -> 2.1.1
 * [new tag]             2.1.10      -> 2.1.10
 * [new tag]             2.1.11      -> 2.1.11
 * [new tag]             2.1.12      -> 2.1.12
 * [new tag]             2.1.13      -> 2.1.13
 * [new tag]             2.1.14      -> 2.1.14
 * [new tag]             2.1.15      -> 2.1.15
 * [new tag]             2.1.16      -> 2.1.16
 * [new tag]             2.1.2       -> 2.1.2
 * [new tag]             2.1.3       -> 2.1.3
 * [new tag]             2.1.4       -> 2.1.4
 * [new tag]             2.1.5       -> 2.1.5
 * [new tag]             2.1.6       -> 2.1.6
 * [new tag]             2.1.7       -> 2.1.7
 * [new tag]             2.1.8       -> 2.1.8
 * [new tag]             2.1.9       -> 2.1.9
 * [new tag]             2.2.0       -> 2.2.0
 * [new tag]             2.2.1       -> 2.2.1
 * [new tag]             2.2.10      -> 2.2.10
 * [new tag]             2.2.11      -> 2.2.11
 * [new tag]             2.2.12      -> 2.2.12
 * [new tag]             2.2.13      -> 2.2.13
 * [new tag]             2.2.14      -> 2.2.14
 * [new tag]             2.2.15      -> 2.2.15
 * [new tag]             2.2.16      -> 2.2.16
 * [new tag]             2.2.17      -> 2.2.17
 * [new tag]             2.2.2       -> 2.2.2
 * [new tag]             2.2.3       -> 2.2.3
 * [new tag]             2.2.4       -> 2.2.4
 * [new tag]             2.2.5       -> 2.2.5
 * [new tag]             2.2.6       -> 2.2.6
 * [new tag]             2.2.7       -> 2.2.7
 * [new tag]             2.2.8       -> 2.2.8
 * [new tag]             2.2.9       -> 2.2.9
 * [new tag]             2.3.0       -> 2.3.0
 * [new tag]             2.4.0       -> 2.4.0
 * [new tag]             2.4.1       -> 2.4.1
 * [new tag]             2.4.10      -> 2.4.10
 * [new tag]             2.4.11      -> 2.4.11
 * [new tag]             2.4.12      -> 2.4.12
 * [new tag]             2.4.13      -> 2.4.13
 * [new tag]             2.4.14      -> 2.4.14
 * [new tag]             2.4.15      -> 2.4.15
 * [new tag]             2.4.16      -> 2.4.16
 * [new tag]             2.4.2       -> 2.4.2
 * [new tag]             2.4.3       -> 2.4.3
 * [new tag]             2.4.4       -> 2.4.4
 * [new tag]             2.4.5       -> 2.4.5
 * [new tag]             2.4.6       -> 2.4.6
 * [new tag]             2.4.7       -> 2.4.7
 * [new tag]             2.4.8       -> 2.4.8
 * [new tag]             2.4.9       -> 2.4.9
 * [new tag]             2.5.0       -> 2.5.0
 * [new tag]             2.5.1       -> 2.5.1
 * [new tag]             2.5.10      -> 2.5.10
 * [new tag]             2.5.11      -> 2.5.11
 * [new tag]             2.5.12      -> 2.5.12
 * [new tag]             2.5.2       -> 2.5.2
 * [new tag]             2.5.3       -> 2.5.3
 * [new tag]             2.5.4       -> 2.5.4
 * [new tag]             2.5.5       -> 2.5.5
 * [new tag]             2.5.6       -> 2.5.6
 * [new tag]             2.5.7       -> 2.5.7
 * [new tag]             2.5.8       -> 2.5.8
 * [new tag]             2.5.9       -> 2.5.9
 * [new tag]             2.6.0       -> 2.6.0
 * [new tag]             2.6.1       -> 2.6.1
 * [new tag]             2.6.2       -> 2.6.2
 * [new tag]             2.7.0       -> 2.7.0
 * [new tag]             2.7.1       -> 2.7.1
 * [new tag]             2.7.2       -> 2.7.2
 * [new tag]             2.7.3       -> 2.7.3
 * [new tag]             2.7.4       -> 2.7.4
 * [new tag]             2.7.5       -> 2.7.5
 * [new tag]             2.7.6       -> 2.7.6
 * [new tag]             2.7.7       -> 2.7.7
 * [new tag]             3.0.0       -> 3.0.0
 * [new tag]             3.0.1       -> 3.0.1
 * [new tag]             3.0.10      -> 3.0.10
 * [new tag]             3.0.11      -> 3.0.11
 * [new tag]             3.0.2       -> 3.0.2
 * [new tag]             3.0.3       -> 3.0.3
 * [new tag]             3.0.4       -> 3.0.4
 * [new tag]             3.0.5       -> 3.0.5
 * [new tag]             3.0.6       -> 3.0.6
 * [new tag]             3.0.7       -> 3.0.7
 * [new tag]             3.0.8       -> 3.0.8
 * [new tag]             3.0.9       -> 3.0.9
 * [new tag]             3.1.0       -> 3.1.0
 * [new tag]             3.1.1       -> 3.1.1
 * [new tag]             3.1.10      -> 3.1.10
 * [new tag]             3.1.11      -> 3.1.11
 * [new tag]             3.1.12      -> 3.1.12
 * [new tag]             3.1.2       -> 3.1.2
 * [new tag]             3.1.3       -> 3.1.3
 * [new tag]             3.1.4       -> 3.1.4
 * [new tag]             3.1.5       -> 3.1.5
 * [new tag]             3.1.6       -> 3.1.6
 * [new tag]             3.1.7       -> 3.1.7
 * [new tag]             3.1.8       -> 3.1.8
 * [new tag]             3.1.9       -> 3.1.9
 * [new tag]             3.2.0       -> 3.2.0
 * [new tag]             3.2.1       -> 3.2.1
 * [new tag]             3.2.10      -> 3.2.10
 * [new tag]             3.2.11      -> 3.2.11
 * [new tag]             3.2.12      -> 3.2.12
 * [new tag]             3.2.13      -> 3.2.13
 * [new tag]             3.2.14      -> 3.2.14
 * [new tag]             3.2.15      -> 3.2.15
 * [new tag]             3.2.16      -> 3.2.16
 * [new tag]             3.2.17      -> 3.2.17
 * [new tag]             3.2.2       -> 3.2.2
 * [new tag]             3.2.3       -> 3.2.3
 * [new tag]             3.2.4       -> 3.2.4
 * [new tag]             3.2.5       -> 3.2.5
 * [new tag]             3.2.6       -> 3.2.6
 * [new tag]             3.2.7       -> 3.2.7
 * [new tag]             3.2.8       -> 3.2.8
 * [new tag]             3.2.9       -> 3.2.9
 * [new tag]             3.3.0       -> 3.3.0
 * [new tag]             3.3.1       -> 3.3.1
 * [new tag]             3.3.10      -> 3.3.10
 * [new tag]             3.3.11      -> 3.3.11
 * [new tag]             3.3.12      -> 3.3.12
 * [new tag]             3.3.13      -> 3.3.13
 * [new tag]             3.3.14      -> 3.3.14
 * [new tag]             3.3.15      -> 3.3.15
 * [new tag]             3.3.16      -> 3.3.16
 * [new tag]             3.3.2       -> 3.3.2
 * [new tag]             3.3.3       -> 3.3.3
 * [new tag]             3.3.4       -> 3.3.4
 * [new tag]             3.3.5       -> 3.3.5
 * [new tag]             3.3.6       -> 3.3.6
 * [new tag]             3.3.7       -> 3.3.7
 * [new tag]             3.3.8       -> 3.3.8
 * [new tag]             3.3.9       -> 3.3.9
 * [new tag]             3.4.0       -> 3.4.0
 * [new tag]             3.4.1       -> 3.4.1
 * [new tag]             3.4.10      -> 3.4.10
 * [new tag]             3.4.11      -> 3.4.11
 * [new tag]             3.4.2       -> 3.4.2
 * [new tag]             3.4.3       -> 3.4.3
 * [new tag]             3.4.4       -> 3.4.4
 * [new tag]             3.4.5       -> 3.4.5
 * [new tag]             3.4.6       -> 3.4.6
 * [new tag]             3.4.7       -> 3.4.7
 * [new tag]             3.4.8       -> 3.4.8
 * [new tag]             3.4.9       -> 3.4.9
 * [new tag]             3.5.0       -> 3.5.0
 * [new tag]             3.5.1       -> 3.5.1
 * [new tag]             3.5.10      -> 3.5.10
 * [new tag]             3.5.2       -> 3.5.2
 * [new tag]             3.5.3       -> 3.5.3
 * [new tag]             3.5.4       -> 3.5.4
 * [new tag]             3.5.5       -> 3.5.5
 * [new tag]             3.5.6       -> 3.5.6
 * [new tag]             3.5.7       -> 3.5.7
 * [new tag]             3.5.8       -> 3.5.8
 * [new tag]             3.5.9       -> 3.5.9
 * [new tag]             3.6.0       -> 3.6.0
 * [new tag]             3.6.1       -> 3.6.1
 * [new tag]             3.6.10      -> 3.6.10
 * [new tag]             3.6.11      -> 3.6.11
 * [new tag]             3.6.12      -> 3.6.12
 * [new tag]             3.6.13      -> 3.6.13
 * [new tag]             3.6.14      -> 3.6.14
 * [new tag]             3.6.15      -> 3.6.15
 * [new tag]             3.6.16      -> 3.6.16
 * [new tag]             3.6.17      -> 3.6.17
 * [new tag]             3.6.18      -> 3.6.18
 * [new tag]             3.6.19      -> 3.6.19
 * [new tag]             3.6.2       -> 3.6.2
 * [new tag]             3.6.20      -> 3.6.20
 * [new tag]             3.6.21      -> 3.6.21
 * [new tag]             3.6.3       -> 3.6.3
 * [new tag]             3.6.4       -> 3.6.4
 * [new tag]             3.6.5       -> 3.6.5
 * [new tag]             3.6.6       -> 3.6.6
 * [new tag]             3.6.7       -> 3.6.7
 * [new tag]             3.6.8       -> 3.6.8
 * [new tag]             3.6.9       -> 3.6.9
 * [new tag]             4.0.0       -> 4.0.0
 * [new tag]             4.0.1       -> 4.0.1
 * [new tag]             4.0.10      -> 4.0.10
 * [new tag]             4.0.11      -> 4.0.11
 * [new tag]             4.0.12      -> 4.0.12
 * [new tag]             4.0.13      -> 4.0.13
 * [new tag]             4.0.14      -> 4.0.14
 * [new tag]             4.0.15      -> 4.0.15
 * [new tag]             4.0.16      -> 4.0.16
 * [new tag]             4.0.17      -> 4.0.17
 * [new tag]             4.0.18      -> 4.0.18
 * [new tag]             4.0.19      -> 4.0.19
 * [new tag]             4.0.2       -> 4.0.2
 * [new tag]             4.0.20      -> 4.0.20
 * [new tag]             4.0.21      -> 4.0.21
 * [new tag]             4.0.22      -> 4.0.22
 * [new tag]             4.0.23      -> 4.0.23
 * [new tag]             4.0.24      -> 4.0.24
 * [new tag]             4.0.25      -> 4.0.25
 * [new tag]             4.0.26      -> 4.0.26
 * [new tag]             4.0.27      -> 4.0.27
 * [new tag]             4.0.28      -> 4.0.28
 * [new tag]             4.0.3       -> 4.0.3
 * [new tag]             4.0.4       -> 4.0.4
 * [new tag]             4.0.5       -> 4.0.5
 * [new tag]             4.0.6       -> 4.0.6
 * [new tag]             4.0.7       -> 4.0.7
 * [new tag]             4.0.8       -> 4.0.8
 * [new tag]             4.0.9       -> 4.0.9
 * [new tag]             4.1.0       -> 4.1.0
 * [new tag]             4.1.1       -> 4.1.1
 * [new tag]             4.1.10      -> 4.1.10
 * [new tag]             4.1.11      -> 4.1.11
 * [new tag]             4.1.12      -> 4.1.12
 * [new tag]             4.1.13      -> 4.1.13
 * [new tag]             4.1.14      -> 4.1.14
 * [new tag]             4.1.15      -> 4.1.15
 * [new tag]             4.1.16      -> 4.1.16
 * [new tag]             4.1.17      -> 4.1.17
 * [new tag]             4.1.18      -> 4.1.18
 * [new tag]             4.1.19      -> 4.1.19
 * [new tag]             4.1.2       -> 4.1.2
 * [new tag]             4.1.20      -> 4.1.20
 * [new tag]             4.1.21      -> 4.1.21
 * [new tag]             4.1.22      -> 4.1.22
 * [new tag]             4.1.23      -> 4.1.23
 * [new tag]             4.1.24      -> 4.1.24
 * [new tag]             4.1.25      -> 4.1.25
 * [new tag]             4.1.3       -> 4.1.3
 * [new tag]             4.1.4       -> 4.1.4
 * [new tag]             4.1.5       -> 4.1.5
 * [new tag]             4.1.6       -> 4.1.6
 * [new tag]             4.1.7       -> 4.1.7
 * [new tag]             4.1.8       -> 4.1.8
 * [new tag]             4.2.0       -> 4.2.0
 * [new tag]             4.2.1       -> 4.2.1
 * [new tag]             4.2.2       -> 4.2.2
 * [new tag]             4.2.3       -> 4.2.3
 * [new tag]             4.2.4       -> 4.2.4
 * [new tag]             4.2.5       -> 4.2.5
 * [new tag]             4.2.6       -> 4.2.6
 * [new tag]             4.2.7       -> 4.2.7
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (11/11), done.
remote: Total 18 (delta 11), reused 11 (delta 11), pack-reused 7
Unpacking objects: 100% (18/18), 3.38 KiB | 128.00 KiB/s, done.
From https://github.com/Homebrew/brew
 * [new tag]             4.0.29     -> 4.0.29
 * [new tag]             4.1.9      -> 4.1.9
Updating files: 100% (2151/2151), done.
HEAD is now at 352f57d75 Merge pull request #16641 from aaronliu0130/patch-1
fatal: cannot force update the branch 'master' checked out at '/usr/local/Homebrew'
==> Downloading https://ghcr.io/v2/homebrew/portable-ruby/portable-ruby/blobs/sha256:02180ca8b8295422ae84921bcf034b7ee8ce5575488bd5e6a37a192e53cd5d34
######################################################################### 100.0%
==> Pouring portable-ruby-3.1.4.el_capitan.bottle.tar.gz
==> Installation successful!

==> Homebrew has enabled anonymous aggregate formulae and cask analytics.
Read the analytics documentation (and how to opt-out) here:
  https://docs.brew.sh/Analytics
No analytics data has been sent yet (nor will any be during this install run).

==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
  https://github.com/Homebrew/brew#donations

==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    (echo; echo 'eval "$(/usr/local/bin/brew shellenv)"') >> /Users/ahmed/.zprofile
    eval "$(/usr/local/bin/brew shellenv)"
- Run brew help to get started
- Further documentation:
    https://docs.brew.sh

ahmed@Ahmeds-MacBook-Pro ~ % pod --version                              
zsh: command not found: pod
ahmed@Ahmeds-MacBook-Pro ~ % rvm install ruby-3.3.0
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/12.6/x86_64/ruby-3.3.0.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
df: getattrlist failed: Input/output error
Checking requirements for osx.
Installing requirements for osx.
Updating system - please wait
Installing required packages: autoconf, automake, libtool, pkg-config, coreutils, libyaml, libksba, readline, zlib, openssl@1.1 - please wait
Certificates bundle '/usr/local/etc/openssl@1.1/cert.pem' is already up to date.
Requirements installation successful.
Installing Ruby from source to: /Users/ahmed/.rvm/rubies/ruby-3.3.0, this may take a while depending on your cpu(s)...
ruby-3.3.0 - #downloading ruby-3.3.0, this may take a while depending on your connection...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 21.0M  100 21.0M    0     0  2676k      0  0:00:08  0:00:08 --:--:-- 3192k
No checksum for downloaded archive, recording checksum in user configuration.
ruby-3.3.0 - #extracting ruby-3.3.0 to /Users/ahmed/.rvm/src/ruby-3.3.0 - please wait
ruby-3.3.0 - #configuring - please wait
ruby-3.3.0 - #post-configuration - please wait
ruby-3.3.0 - #compiling - please wait
ruby-3.3.0 - #installing - please wait
ruby-3.3.0 - #making binaries executable - please wait
Installed rubygems 3.5.3 is newer than 3.0.9 provided with installed ruby, skipping installation, use --force to force installation.
ruby-3.3.0 - #gemset created /Users/ahmed/.rvm/gems/ruby-3.3.0@global
ruby-3.3.0 - #importing gemset /Users/ahmed/.rvm/gemsets/global.gems - please wait
ruby-3.3.0 - #generating global wrappers - please wait
ruby-3.3.0 - #gemset created /Users/ahmed/.rvm/gems/ruby-3.3.0
ruby-3.3.0 - #importing gemsetfile /Users/ahmed/.rvm/gemsets/default.gems evaluated to empty gem list
ruby-3.3.0 - #generating default wrappers - please wait
ruby-3.3.0 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
Install of ruby-3.3.0 - #complete 
Ruby was built without documentation, to build it run: rvm docs generate-ri
ahmed@Ahmeds-MacBook-Pro ~ % pod --version         
zsh: command not found: pod
ahmed@Ahmeds-MacBook-Pro ~ % curl -L https://get.rvm.io | bash -s stable
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   194  100   194    0     0    175      0  0:00:01  0:00:01 --:--:--   177
100 24532  100 24532    0     0  14447      0  0:00:01  0:00:01 --:--:-- 3422k
df: getattrlist failed: Input/output error
Downloading https://github.com/rvm/rvm/archive/1.29.12.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc
Found PGP signature at: 'https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc',
but no GPG software exists to validate it, skipping.
Upgrading the RVM installation in /Users/ahmed/.rvm/
    RVM PATH line found in /Users/ahmed/.mkshrc /Users/ahmed/.profile /Users/ahmed/.bashrc /Users/ahmed/.zshrc.
    RVM sourcing line found in /Users/ahmed/.profile /Users/ahmed/.bash_profile /Users/ahmed/.zlogin.
Upgrade of RVM in /Users/ahmed/.rvm/ is complete.

Thanks for installing RVM 🙏
Please consider donating to our open collective to help us maintain RVM.

👉  Donate: https://opencollective.com/rvm/donate


ahmed@Ahmeds-MacBook-Pro ~ % sudo gem install cocoapods                 
Password:
Fetching nanaimo-0.3.0.gem
Fetching colored2-3.1.2.gem
Fetching claide-1.1.0.gem
Fetching CFPropertyList-3.0.6.gem
Fetching atomos-0.1.3.gem
Fetching xcodeproj-1.24.0.gem
Fetching ruby-macho-2.5.1.gem
Fetching nap-1.1.0.gem
Fetching molinillo-0.8.0.gem
Fetching gh_inspector-1.1.3.gem
Fetching fourflusher-2.3.1.gem
Fetching escape-0.0.4.gem
Fetching cocoapods-try-1.2.0.gem
Fetching netrc-0.11.0.gem
Fetching cocoapods-trunk-1.6.0.gem
Fetching cocoapods-search-1.0.1.gem
Fetching cocoapods-plugins-1.0.0.gem
Fetching cocoapods-downloader-2.1.gem
Fetching cocoapods-deintegrate-1.0.5.gem
Fetching ffi-1.16.3.gem
Fetching ethon-0.16.0.gem
Fetching typhoeus-1.4.1.gem
Fetching public_suffix-4.0.7.gem
Fetching fuzzy_match-2.0.4.gem
Fetching concurrent-ruby-1.2.3.gem
Fetching httpclient-2.8.3.gem
Fetching algoliasearch-1.27.5.gem
Fetching addressable-2.8.6.gem
Fetching tzinfo-2.0.6.gem
Fetching i18n-1.14.1.gem
Fetching connection_pool-2.4.1.gem
Fetching activesupport-7.1.3.gem
Fetching cocoapods-1.15.2.gem
Fetching cocoapods-core-1.15.2.gem
Successfully installed nanaimo-0.3.0
Successfully installed colored2-3.1.2
Successfully installed claide-1.1.0
Successfully installed CFPropertyList-3.0.6
Successfully installed atomos-0.1.3
Successfully installed xcodeproj-1.24.0
Successfully installed ruby-macho-2.5.1
Successfully installed nap-1.1.0
Successfully installed molinillo-0.8.0
Successfully installed gh_inspector-1.1.3
Successfully installed fourflusher-2.3.1
Successfully installed escape-0.0.4
Successfully installed cocoapods-try-1.2.0
Successfully installed netrc-0.11.0
Successfully installed cocoapods-trunk-1.6.0
Successfully installed cocoapods-search-1.0.1
Successfully installed cocoapods-plugins-1.0.0
Successfully installed cocoapods-downloader-2.1
Successfully installed cocoapods-deintegrate-1.0.5
Building native extensions. This could take a while...
Successfully installed ffi-1.16.3
Successfully installed ethon-0.16.0
Successfully installed typhoeus-1.4.1
Successfully installed public_suffix-4.0.7
Successfully installed fuzzy_match-2.0.4
Successfully installed concurrent-ruby-1.2.3
Successfully installed httpclient-2.8.3
A new major version is available for Algolia! Please now use the https://rubygems.org/gems/algolia gem to get the latest features.
Successfully installed algoliasearch-1.27.5
Successfully installed addressable-2.8.6
Successfully installed tzinfo-2.0.6
Successfully installed i18n-1.14.1
Successfully installed connection_pool-2.4.1
Successfully installed activesupport-7.1.3
Successfully installed cocoapods-core-1.15.2
Successfully installed cocoapods-1.15.2
Parsing documentation for nanaimo-0.3.0
Installing ri documentation for nanaimo-0.3.0
Parsing documentation for colored2-3.1.2
Installing ri documentation for colored2-3.1.2
Parsing documentation for claide-1.1.0
Installing ri documentation for claide-1.1.0
Parsing documentation for CFPropertyList-3.0.6
Installing ri documentation for CFPropertyList-3.0.6
Parsing documentation for atomos-0.1.3
Installing ri documentation for atomos-0.1.3
Parsing documentation for xcodeproj-1.24.0
Installing ri documentation for xcodeproj-1.24.0
Parsing documentation for ruby-macho-2.5.1
Installing ri documentation for ruby-macho-2.5.1
Parsing documentation for nap-1.1.0
Installing ri documentation for nap-1.1.0
Parsing documentation for molinillo-0.8.0
Installing ri documentation for molinillo-0.8.0
Parsing documentation for gh_inspector-1.1.3
Installing ri documentation for gh_inspector-1.1.3
Parsing documentation for fourflusher-2.3.1
Installing ri documentation for fourflusher-2.3.1
Parsing documentation for escape-0.0.4
Installing ri documentation for escape-0.0.4
Parsing documentation for cocoapods-try-1.2.0
Installing ri documentation for cocoapods-try-1.2.0
Parsing documentation for netrc-0.11.0
Installing ri documentation for netrc-0.11.0
Parsing documentation for cocoapods-trunk-1.6.0
Installing ri documentation for cocoapods-trunk-1.6.0
Parsing documentation for cocoapods-search-1.0.1
Installing ri documentation for cocoapods-search-1.0.1
Parsing documentation for cocoapods-plugins-1.0.0
Installing ri documentation for cocoapods-plugins-1.0.0
Parsing documentation for cocoapods-downloader-2.1
Installing ri documentation for cocoapods-downloader-2.1
Parsing documentation for cocoapods-deintegrate-1.0.5
Installing ri documentation for cocoapods-deintegrate-1.0.5
Parsing documentation for ffi-1.16.3
Installing ri documentation for ffi-1.16.3
Parsing documentation for ethon-0.16.0
Installing ri documentation for ethon-0.16.0
Parsing documentation for typhoeus-1.4.1
Installing ri documentation for typhoeus-1.4.1
Parsing documentation for public_suffix-4.0.7
Installing ri documentation for public_suffix-4.0.7
Parsing documentation for fuzzy_match-2.0.4
Installing ri documentation for fuzzy_match-2.0.4
Parsing documentation for concurrent-ruby-1.2.3
Installing ri documentation for concurrent-ruby-1.2.3
Parsing documentation for httpclient-2.8.3
Installing ri documentation for httpclient-2.8.3
Parsing documentation for algoliasearch-1.27.5
Installing ri documentation for algoliasearch-1.27.5
Parsing documentation for addressable-2.8.6
Installing ri documentation for addressable-2.8.6
Parsing documentation for tzinfo-2.0.6
Installing ri documentation for tzinfo-2.0.6
Parsing documentation for i18n-1.14.1
Installing ri documentation for i18n-1.14.1
Parsing documentation for connection_pool-2.4.1
Installing ri documentation for connection_pool-2.4.1
Parsing documentation for activesupport-7.1.3
Couldn't find file to include 'activesupport/README.rdoc' from lib/active_support.rb
Installing ri documentation for activesupport-7.1.3
Parsing documentation for cocoapods-core-1.15.2
Installing ri documentation for cocoapods-core-1.15.2
Parsing documentation for cocoapods-1.15.2
Installing ri documentation for cocoapods-1.15.2
Done installing documentation for nanaimo, colored2, claide, CFPropertyList, atomos, xcodeproj, ruby-macho, nap, molinillo, gh_inspector, fourflusher, escape, cocoapods-try, netrc, cocoapods-trunk, cocoapods-search, cocoapods-plugins, cocoapods-downloader, cocoapods-deintegrate, ffi, ethon, typhoeus, public_suffix, fuzzy_match, concurrent-ruby, httpclient, algoliasearch, addressable, tzinfo, i18n, connection_pool, activesupport, cocoapods-core, cocoapods after 22 seconds
34 gems installed
ahmed@Ahmeds-MacBook-Pro ~ % pod --version                              
1.15.2
ahmed@Ahmeds-MacBook-Pro ~ % 

```