
export  const getGifs = async( category ) => {

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=9arW6eCRyGoNPsWcpr6qEQhySBlUdcqu&q=${ encodeURI( category ) }&limit=10`);
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    } )

    return gifs;

  }
