---
title: A simple example of PHP OOP
layout: single_post
permalink: a-simple-example-of-php-ooput
author: Shaharia Azam
author_url: http://www.shahariaazam.com
categories: [PHP, OOP]
tags: [OOP, PHP, code]
---
Object Oriented Programming in PHP is MUST to be a PHP programmer. See the following simple OOP Snippet written in PHP

{% highlight php %}

<?php
/**
 * @author Shaharia Azam
 * @link http://www.shahariaazam.com
 * @description This simple class will return your next number. In this example the myNextNumber method will
 * return yourGivenNumber + 2. Because in class constructor you declared each time you will run myNextNumber method
 * it will return with +2. This is just for a simple OOP snippet to learn it.
 */
class ClassName
{
    public $var;

    /**
     * Constructor of your Class
     */
    function __construct()
    {
        return $this->var = 2;
    }

    /**
     * @method myMethod
     */
    public function myNextNumber($arg = null)
    {
        return $this->var + $arg;
    }
}

$obj = new ClassName();
$result = $obj->myNextNumber(3);
var_dump($result); //output: int(5)
?>

{% endhighlight %}
Happy PHP-ing.
