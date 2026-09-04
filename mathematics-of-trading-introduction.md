Welcome to *Mathematics of Trading* — a short series where I work through the ideas behind quantitative trading from the ground up, roughly at the level I wish someone had explained them to me.

## Why maths?

Markets look chaotic, but a lot of the machinery for reasoning about them is surprisingly simple. The core question is always the same: given what we know now, what can we say about what happens next?

The simplest object we'll keep coming back to is a **return** — the fractional change in a price from one step to the next:

$$r_t = \frac{P_t - P_{t-1}}{P_{t-1}}$$

In code, that's essentially a one-liner:

```python
import numpy as np

prices = np.array([100, 102, 101, 105])
returns = np.diff(prices) / prices[:-1]
print(returns)   # [ 0.02   -0.0098   0.0396 ]
```

Returns are more useful than raw prices because they're comparable across assets and across time — a move from 100 to 102 and a move from 5 to 5.1 are both "up 2%".

## What's coming

Over the next few posts we'll build up from here: how to measure *uncertainty*, how to *model randomness*, and eventually how these ideas turn into something you can actually test on data.

## References

- [Hull, *Options, Futures, and Other Derivatives*](https://example.com)
