from Crypto.Hash import SHA

h = SHA.new()
h.update(b'Hello')
print h.hexdigest()
h.update(b'Hello')
print h.hexdigest()
print SHA.new(b'Hello').hexdigest()
print SHA.new(b'Hello').hexdigest()
