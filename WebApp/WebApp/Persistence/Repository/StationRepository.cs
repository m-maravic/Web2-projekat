﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
	public class StationRepository : Repository<Station, int>, IStationRepository
	{
		public StationRepository(DbContext dbContext) : base(dbContext) { }
	
	}
}