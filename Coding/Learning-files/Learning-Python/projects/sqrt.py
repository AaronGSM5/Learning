def sqrt_newton_raphson(x, tolerance=1e-10, max_iterations=1000):
    # Initial guess: x / 2 or 1 (whichever is greater to avoid slow convergence on large numbers)
    y = max(x / 2.0, 1)

    for _ in range(max_iterations):
        new_y = 0.5 * (y + x / y)
        
        # Check if the improvement is small enough
        if abs(new_y - y) < tolerance:
            return new_y
        
        y = new_y

    return y  # Return the computed square root after max_iterations if no convergence

# Example usage
number = float(input('number? '))
result = sqrt_newton_raphson(number)
print("Square root of", number, "is approximately", result, "so", result, "*", result, "=", result*result)
