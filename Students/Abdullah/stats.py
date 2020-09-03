def avg(nums):
    return sum(nums) / len(nums) if len(nums) > 0 else 0

def l_sqr(nums):
    return [num ** 2 for num in nums]

def var(nums):
    return sum([(n - avg(nums))**2 for n in nums]) / (len(nums) - 1)
