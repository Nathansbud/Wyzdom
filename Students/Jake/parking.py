import math

def compute_ticket(hours):
    hours, lost = math.ceil(abs(hours)), hours < 0
    days, remainder = hours // 24, hours % 24

    cost = days * 24 + min((remainder >= 0) * 4 + (remainder > 2) * 3 + (remainder - 4) * (remainder > 4), 24)
    
    return cost + (lost * 36)

info = ['0-2 Hours: $4.00', '2-4 Hours: $3.00', '>4 Hours: $1.00', 'Max Daily: $24.00', 'Lost Ticket Fee: $36.00']

print("Zack's Parking Garage", "Costs:", *[f"• {entry}" for entry in info], sep="\n")
passed = False
while not passed:
    try: 
        hours = input("How many hours are you parking for? ")
        num_hours = float(hours)
        print(f"Your bill is: ${compute_ticket(num_hours):.2f}!")
    except ValueError: 
        print("Please input a number of hours (- if ticket has been lost)!")


