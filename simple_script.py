import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

vo = 8                   # Initial velocity
phi = np.radians(45)      # Launch angle with respect to the horizontal
g = 9.80                  # Gravity acceleration

x = []                                               # Initialize an empty list to store x-coordinates of the projectile
y = []                                               # Initialize an empty list to store y-coordinates of the projectile

# Loop over a range of x-values to calculate the corresponding y-values
# using the projectile motion formula
for xi in np.arange(0, 6.56, 0.04):                  # Start at x=0, end at x=6.56, with a step of 0.04
    x.append(xi)                                     # Add the current x-value to the list of x-coordinates
    # Calculate the y-value using the projectile equation and add it to the list of y-coordinates
    y.append(xi * np.tan(phi) - (g * xi**2) / (2 * vo**2 * np.cos(phi)**2))

# Create a DataFrame from the lists of x and y values with corresponding column labels
results = pd.DataFrame({'X [m]': x, 'Y [m]': y})

# Display the DataFrame showing all rows to view the trajectory data
results.head(len(results))

max_Y = np.max(results.iloc[1:,1])
x_row = np.where(results['Y [m]'] == max_Y)
x_row = x_row[0].tolist()
x_value = results.iloc[x_row[0],0]
print(x_value, max_Y)

fig,ax = plt.subplots(figsize = (16/1.2,9/1.2))

ax.plot(x, y, linewidth=1, marker='+', color=(0, 0, 0), markerfacecolor='w', markeredgewidth=0, alpha=0.8, label= 'Results')
ax.scatter(x_value, max_Y, label=f'Max Y = {max_Y:.2f}  m')
ax.set_title('Parabolic Motion', fontsize = 10, color = (0,0,1))
ax.set_xlabel('X [m]')
ax.set_ylabel('Y [m]')
ax.set_xlim(0, max(x))
ax.set_ylim(0, max(y)*1.05)
ax.grid(which='both', axis = 'x', alpha=0.5)
legend = ax.legend(loc='upper right', bbox_to_anchor=(1, 1), fontsize=9)
legend.get_frame().set_edgecolor('none')