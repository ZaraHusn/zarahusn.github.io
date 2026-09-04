"""Simulate geometric Brownian motion price paths.

Example attachment for "Mathematics of Trading: Modeling Randomness".
Run with:  python randomness.py
"""

import numpy as np
import matplotlib.pyplot as plt


def gbm(s0=100.0, mu=0.08, sigma=0.20, days=252, seed=0):
    """Return one simulated price path over `days` trading days."""
    rng = np.random.default_rng(seed)
    dt = 1 / days
    shocks = rng.normal((mu - 0.5 * sigma ** 2) * dt,
                        sigma * np.sqrt(dt), days)
    return s0 * np.exp(np.cumsum(shocks))


if __name__ == "__main__":
    for seed in range(3):
        plt.plot(gbm(seed=seed))

    plt.title("Simulated price paths (GBM)")
    plt.xlabel("day")
    plt.ylabel("price")
    plt.tight_layout()
    plt.show()
