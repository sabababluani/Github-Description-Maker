# Movie Agent
A Node.js-based agent that helps users search for movies, manage watchlists, and retrieve movie information using the OMDb API. Built with Mastra framework and Claude AI capabilities.

## Features
- Search movies by title using OMDb API
- Get detailed movie information (title, year, director, IMDb score)
- Add movies to personal watchlist
- Check if movies are already watchlisted
- Retrieve full watchlist
- Prevent duplicate entries in watchlist

## Example Output

```json
{
  "data": {
    "title": "The Matrix",
    "year": 1999,
    "director": "Lana Wachowski, Lilly Wachowski",
    "imdbScore": 8.7,
    "watchlisted": false
  }
}
```

## How to Run
### 1. Clone the Repository

```bash
git clone https://github.com/sabababluani/Movie-agent.git
```

### 2. Navigate to Project Directory

```bash
cd Movie-agent
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Environment Variables
Create a `.env` file and add your OMDb API key:

```bash
OMDB_API_KEY=your_api_key_here
```



### 5. Run the Application

```bash
npm run dev
```

## Technologies Used
- Node.js (>=20.9.0)
- Mastra Framework
- Claude AI (Anthropic)
- TypeScript
- OMDb API
- LibSQL
- Zod

## Project Structure

```
src/
├── mastra/
│   ├── agents/
│   │   ├── github-agent.ts
│   │   └── instructions.ts
│   ├── tools/
│   │   ├── addToWatchlistTool.ts
│   │   ├── getWatchlistTool.ts
│   │   ├── searchMovieTool.ts
│   │   └── index.ts
│   └── index.ts
```

## Recent Changes
- feat: Added movie search functionality
- feat: Implemented watchlist management
- feat: Added OMDb API integration
- feat: Added Claude AI agent capabilities

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License
ISC License
