const apiKey = 'zzdsJFapnV8uUbAbs_aCjZs89ohJ6noew7mFsUO0YUuH9TsqsfdUQztJMwe_Df5WV5OFBHiTVA1_7Ed3WLa1D1w4jke9Kf7xj6lBur9fADwzjN24cQeKwiH0pzDkXnYx';

export const Yelp = {
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
    `,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          })
        )
      }
    })
  }
};
