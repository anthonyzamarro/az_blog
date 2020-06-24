---
path: '/what-is-ssh'
title: 'SSH'
published: true
author: 'Anthony'
date: '2019-12-29'
---

## What is it?
SSH (Secure Shell) is a way secure way to connect to remote services. If you've ever cloned a repository from Github, then you've probably seen the option to clone via HTTPS or SSH. I'll explain why you might want to use SSH in this case and why using SSH in general might be a preferred practice.

## How does it work?
SSH works by opening a connect with a remote server by using a public key and a private key. The public key is used on the remote server while you keep the private key on your local machine. 

## How to use it
To use SSH, you need to generate a private key and a public key. You can do this by going to your CLI and typing <code>ssh key-gen</code>. This will automatically create a file for your public and a file for your private key. Keep the private key where it is and do not ever let anyone get ahold of it. On the server you wish to connect with, add the private key. When you connect to that server, it will look for your private key and match its credentials with the public key you provided.

### Sources:	
- https://www.ssh.com/ssh/protocol
