this app will add on the ability for a beaver to have friends
either build a new basic crud app from scratch or copy paste one, we'll add on the ability for objects to make friends

1 - build another model object 
	relationshipModel: object
		properties	
			schema: object
				id1: number
					purpose: one of the friend object's id
				id2: number
					purpose: the other object's id
				id: number
					purpose: this object's id in this model object
				confirmed: boolean
					purpose: to track whether a request is accepted or not
				status: string
			db: object
				initialized: {}
			nextId: number
				initalized: 0
		methods
			getAll: (see other model)
			findBy: - this one's tricky.  we can do it together
				args: array of query objects
					query object:
						properties: variable
							property: object
								properties: 2
									key: string
									value: variable
									criteria: boolean
					examples: 
						findBy([{key: 'id1', value: 4, critera: false}, {key: 'id2, value: 5,  criteria: true}])
							returns: all objects with id2 == 5 and id1 != 4
						findBy([{key: 'status', value: true, criteria: false}])
							returns: all accepted friend requests

				return: array containing all matching objects
				behavior: searches through the db to find any and all objects with a key/value pair that matches the search query.  
					if 'criteria' is true, return all objects with a matching key value pair
					if 'criteria' is false, return all objects without that key/value pair
			getOne: (see other model)
			update: (see other model)
			create: (see other model)
			delete: (see other model)
			validate: 
				args: 2 ids
				return: boolean
				behavior: checks to see if the two ids are already in a relationship object.  you dont want to save the same relationship twice. 

2 - create a new restful router file to access the relationship model object.  you won't yet be using it anywhere, that's the next steps.
	at this point your app will be a basic crud application with an extra model and controller. they don't yet connect to anything

3 -  we'll do this one together if you're having a lot of trouble.
create a new 'profile.ejs'.  it will be replacing read.ejs.  on this file, a user can:
		1: view a beaver's information
			ie. last project's 'read'
		2: view a list of not-friend beavers
			ie. findBy([{key: 'id1', value: profileId, criteria: false}, {key: 'id2', value: profileId, criteria: false}])
		3: view a list of friend beavers
			ie. findBy([{key: 'id1', value: profileId, criteria: true}, {key: 'id2', value: profileId, criteria: true}, {key: 'confirmed', value: true, criteria: true}])
		4: view a list of pending friend requests
			ie. findBy([{key: 'id1', value: profileId, criteria: true}, {key: 'id2', value: profileId, criteria: true}, {key: 'confirmed', value: true, criteria: false}])
		5: send a friend request to a not-friend beaver
			ie. create new relationship object
		6: accept a pending request
			ie. update the relationship to confirmed = true
		7: reject a pending request
			ie. delete the relationship object
	in short: this page has all crud accesses to relationships












