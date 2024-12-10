---
layout: post
title:  "Stochastic simulation"
date:   2024-12-10 18:53:18 +0100
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight python %}
def compute_call_price(S_0, df, r, q, T):
    """
    This function simply computes the undiscounted call price in function of strike K and volatility using Black-Scholes
    :param S_0: Initial price
    :param df: polar dataframe with the various strikes and volatilities
    :param r: interest rate (%)
    :param q: dividend (%)
    :param T: maturity [x/365]
    :return: dataframe with 5 columns added : d1,d2,N(d1),N(d2) and C(S_0,K,vol_imp,T)_undiscounted
    """
    #Compute the factor d1
    df = df.with_columns(
        ((np.log(S_0 / pl.col("strikes")) + (r - q + (pl.col("implied vols") ** 2) / 2) * (T)) / (
                    pl.col("implied vols") * np.sqrt(T))).alias("d1")
    )
    # Compute the factor d2
    df = df.with_columns(
        (pl.col("d1") - (pl.col("implied vols") * np.sqrt(T))).alias("d2")
    )
    # Compute the factor both normal cdf of d1 and d2
    df = df.with_columns(
        pl.col("d1").map_elements(norm.cdf, return_dtype=float).alias("N(d1)"),
        pl.col("d2").map_elements(norm.cdf, return_dtype=float).alias("N(d2)")
    )
    #Use BS call price
    df = df.with_columns(
        ((S_0 * np.exp(-q * T) * pl.col("N(d1)") - pl.col("strikes") * np.exp(-r * T) * pl.col(
            "N(d2)"))*np.exp(r * T)).alias("C(S_0,K,vol_imp,T)_undiscounted")
    )

    return df
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
