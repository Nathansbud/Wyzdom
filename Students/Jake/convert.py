poundsToNewtons = lambda lbs: 4.4482216*lbs
btusToJoules = lambda btus: 1055.06 * btus
pascalsToMercury = lambda pascals: 0.00750062 * pascals
sprToHertz = lambda spr: 1/spr if spr != 0 else 0
milesToMps = lambda mph: mph / 2.237
fahrenheitToCelsius = lambda f: (f - 32) * 5/9
poundsToSlugs = lambda lbs: lbs / 32.174

conversion = {
    "a": {"output": "Pounds to Newtons", "conversion": poundsToNewtons, "from":"lb", "to":"N"},
    "b": {"output": "BTUs to Joules", "conversion": btusToJoules, "from": "BTU", "to": "J"},
    "c": {"output": "Pascals to Millimeters of Mercury", "conversion": pascalsToMercury, "from":"P", "to":"mmm"},
    "d": {"output": "Seconds per revolution to Hertz", "conversion": sprToHertz, "from":"s/rev", "to": "Hz"},
    "e": {"output": "Miles per Hour to Meters per Second", "conversion": milesToMps, "from": "mph", "to":"m/s"},
    "f": {"output": "Fahrenheit to Celsius", "conversion": fahrenheitToCelsius, "from": "°F", "to": "°C"},
    "h": {"output": "Pounds to Slugs", "conversion": poundsToSlugs, "from": "lbf", "to":"slugs"}
}

for key, data in conversion.items(): 
    print(f"{key}: {data['output']}")

selection = input("Select one of the following conversions by letter: ").lower().strip()
if selection in conversion:
    from_unit, to_unit, output, fn = [conversion[selection][key] for key in ['from', 'to', 'output', 'conversion']]
    print(f"Convert {output}")
    try:
        amount = float(input(f"Input ({from_unit}): "))
        print(f"Conversion: {amount}{from_unit} : {fn(amount)}{to_unit}")
    except ValueError:
        print("Invalid amount!")
else: 
    print("Selection must be one of the above options [a-f; h]")