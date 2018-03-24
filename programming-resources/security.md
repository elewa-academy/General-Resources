## [What programming language do hackers use?](https://www.quora.com/What-programming-language-do-hackers-use)  
```
HCL (Human Coding Language)

Hackers are only programmers some of the time. I'm a programmer, I'm not a hacker, I program ALL the time.

Hackers hack humans. They hack human psychology, like magicians.

If you wanted to get into someone's computer, you COULD learn about cryptography, write a program that runs through all the combinations in a few minutes… or you could just download one off the internet. No hacking required.

The hard part is getting access to someone's computer for those few minutes. But, what if they're an email correspondence with you?

You could email them an innocuous virus that causes glitches with their OS. You would have already established yourself as “good with computers,” so you offer to take a look.

Oh! But you have this thing this afternoon, so maybe you can just borrow the laptop, fix it, and meet back for dinner?

They'll basically tell you their password, from which you can probably guess all their other passwords. You download all their history so you know what banks they go to, and what social media they use. Remove the virus you implanted on their computer, and act smug during dinner. Allowing them to praise you for how good you are with computers.

That's hacking.

When you spend hours, like Sherlock Holmes, finding out all the secret information about your crush on social media, that's hacking. It's the same techniques hackers use to get passwords, social security numbers, and addresses.

People are predictable, and they always think they're not. That's why hacking seems so magical, and this generation has turned it into a magic show on tv.

```
Answer thanks to [Mohammed Islam](https://www.quora.com/profile/Mohammed-Islam-19).
___
## What is Hacking?

Hacking is making a computer system do what you want it to, not what it was intended for.  

All the other answers to this Quora question focus on the more technical side of hacking a computer system, but don't mention the heart of it.  The heart of hacking is that every system is unique, and every possible system design must have some vulnerability.  Since humans have designed and use almost all systems, humans are usually the weak point.  Do you use the same passwords everywhere? Do you have passwords written down in a notebook on your desk?  These are greater vulnerabilities than any other.


___
### Cyber-Security 102 - the non-human

At the core of most mechanical security measures is [some form of mathematical encryption](https://www.makeuseof.com/tag/encryption-care/).  Encryption is incredibly robust (assuming there were no human errors in the implementation). There are [two main encryption strategies](https://www.youtube.com/watch?v=ERp8420ucGs), both of these are build on the foundations of Number Theory and large prime numbers.  To crack these simple encryptions with brute force you would need all the computers in the world and at many hundreds of years.  Or a hacker could open your computer, email themselves your private key, and walk out of the coffee shop.  

This imbalance is also visible in a list of common security risks:
* Denial Of Service: Overload the system with requests until it breaks.
* Phishing: You were gulible enough to follow a questionable link.
* Malwares, trojans: Small programs that run on your computer. Probably because you were gulible enough to install them.
* Back doors: Intentional flaws in the source code.
* Unintentional flaws in design: sql injection,  buffer overflow, ... these take quite of bit of technical know-how to detect and attack, but also make up a small portion of all attacks

Most of these are humans making mistakes or even intentionally sabotaging your system.

Take away: 
* The algorithmic/computer side of security is very solid.  
* The Systems side is pretty good.
* The human side is pretty weak.
___
### [Security in Node.js/NPM](https://www.bithound.io/npm-package-security)

One great vulnerability in the Node.js world is open source modules.  A well-built module will be secure - large random numbers are nearly impossible to guess whether or not the source code is exposed.  
  
But what if there's one method in mongoose that has a faulty if-statment?  All of a sudden anyone using mongoose in their project is open to attack by a stubborn hacker who read the entire code base.
  
What happens when your project contains 30 dependancies, and each dependancy has 15 dependancies?  Any of those dependancies can be updated by their owners at any time.  Or any one of those hundreds of dependacnies could have a tiny security risk you don't even know to look for.

Here is an article about being safe with NPM:
* [article](https://techbeacon.com/13-tools-checking-security-risk-open-source-dependencies-0)

Here are some more articles about being safe with NPM:
* [Risingstack article](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)
* ["NPM isn't safe"](https://www.infoworld.com/article/3048526/security/nodejs-alert-google-engineer-finds-flaw-in-npm-scripts.html). - a google developer
* [nodesource article](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
* [the __leftpad__ affair](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/)
* [I peeked into my node_modules folder ...](https://medium.com/friendship-dot-js/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558)
* [_Express_ on using Express](https://expressjs.com/en/advanced/best-practice-security.html)










___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

