# def solve(function, equal, maxIterations=1000):
#   guess = 1
#   for _ in range(maxIterations):



# # example
# function = input('Whats the Function? ')
# equal = input('What should it equal to? ')
# solve(function, equal)

def f(x):
    return eval(equation_str.replace('x', str(x)))

def f_prime(x, h=1e-10):
    return (f(x + h) - f(x)) / h

def solve_equation(equation_str, initial_guess, tolerance=1e-10, max_iterations=1000):
    x = initial_guess
    for _ in range(max_iterations):
        fx = f(x)
        if abs(fx) < tolerance:
            return x
        fpx = f_prime(x)
        if fpx == 0:
            raise ValueError("Derivative is zero. Newton's method cannot converge.")
        x -= fx / fpx
    
    raise ValueError("Newton's method did not converge within the maximum number of iterations.")

# Example usage
equation_str = input("Enter the equation you want to solve (in terms of x): ")
initial_guess = float(input("Enter an initial guess for the root: "))

try:
    root = solve_equation(equation_str, initial_guess)
    print("Root of the equation:", root)
except Exception as e:
    print("Error:", e)


