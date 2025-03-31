---
name: Importance sampling by optimal Control in Option Pricing
tools: [Monte Carlo, Importance Sampling, Option pricing, python, stochastic simulation]
image: /assets/img/stock_paths_optimal_100_500s_300t.png
description: "This project explores Importance Sampling (IS) to improve Monte Carlo simulations for option pricing by reducing variance. We compare standard Monte Carlo with two IS-based methods: one adaptively optimizing the probability measure and another using an optimal control approach, demonstrating improved pricing accuracy."
external_url: https://github.com/donQuiote/IS-in-Option-Pricing
---

Option pricing often relies on Monte Carlo simulations when analytical solutions aren’t available. Importance Sampling (IS) addresses this issue by modifying the probability distribution used in the simulation, thereby reducing variance. In this project, we compare crude Monte Carlo with two IS-based methods: one that adaptively updates the probability measure to find the optimal change, and another that uses an optimal control formulation. Our goal is to show how IS can significantly lower variance, ultimately improving pricing accuracy.